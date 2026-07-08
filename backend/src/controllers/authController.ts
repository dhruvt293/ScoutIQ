import { Request, Response } from 'express';
import { PrismaClient, Role } from '@prisma/client';
import { OAuth2Client } from 'google-auth-library';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export const googleLogin = async (req: Request, res: Response): Promise<void> => {
  try {
    const { token } = req.body;
    if (!token) {
      res.status(400).json({ error: 'Token is required' });
      return;
    }

    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    
    const payload = ticket.getPayload();
    if (!payload || !payload.email) {
      res.status(400).json({ error: 'Invalid Google Token' });
      return;
    }

    const { email, name, sub: googleId } = payload;

    // Upsert User
    const user = await prisma.user.upsert({
      where: { email },
      update: { name: name || 'Unknown' },
      create: {
        email,
        name: name || 'Unknown',
        googleId,
        role: Role.SCOUT,
      },
    });

    // Generate JWT
    const jwtToken = jwt.sign(
      { userId: user.id, role: user.role },
      process.env.JWT_SECRET || 'secret',
      { expiresIn: '7d' }
    );

    res.status(200).json({ token: jwtToken, user });
  } catch (error) {
    console.error('Google Login Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
