import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { OAuth2Client } from 'google-auth-library';
import jwt from 'jsonwebtoken';

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { token } = body;

    if (!token) {
      return NextResponse.json({ error: 'Token is required' }, { status: 400 });
    }

    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    
    const payload = ticket.getPayload();
    if (!payload || !payload.email) {
      return NextResponse.json({ error: 'Invalid Google Token' }, { status: 400 });
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
        role: 'SCOUT', // Assuming Role.SCOUT is mapped to string 'SCOUT'
      },
    });

    // Generate JWT
    const jwtToken = jwt.sign(
      { userId: user.id, role: user.role },
      process.env.JWT_SECRET || 'secret',
      { expiresIn: '7d' }
    );

    return NextResponse.json({ token: jwtToken, user }, { status: 200 });
  } catch (error) {
    console.error('Google Login Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
