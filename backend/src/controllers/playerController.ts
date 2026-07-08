import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const searchPlayers = async (req: Request, res: Response): Promise<void> => {
  try {
    const { query, position, minAge, maxAge, minRating } = req.query;
    
    // Build dynamic where clause
    const where: any = {};
    if (query) {
      where.name = { contains: query as string, mode: 'insensitive' };
    }
    if (position) {
      where.position = { equals: position as string, mode: 'insensitive' };
    }
    if (minAge) {
      where.age = { ...where.age, gte: parseInt(minAge as string) };
    }
    if (maxAge) {
      where.age = { ...where.age, lte: parseInt(maxAge as string) };
    }
    if (minRating) {
      where.overallRating = { gte: parseInt(minRating as string) };
    }

    const players = await prisma.player.findMany({
      where,
      take: 20, // Pagination limit (can be dynamic)
      orderBy: { overallRating: 'desc' }
    });

    res.status(200).json(players);
  } catch (error) {
    console.error('Error searching players:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getPlayerById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const player = await prisma.player.findUnique({
      where: { id },
      include: {
        statistics: {
          include: {
            match: true
          }
        },
        predictions: true,
      }
    });

    if (!player) {
      res.status(404).json({ error: 'Player not found' });
      return;
    }

    res.status(200).json(player);
  } catch (error) {
    console.error('Error fetching player:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const comparePlayers = async (req: Request, res: Response): Promise<void> => {
  try {
    const { player1Id, player2Id } = req.query;
    
    if (!player1Id || !player2Id) {
      res.status(400).json({ error: 'player1Id and player2Id are required' });
      return;
    }

    const players = await prisma.player.findMany({
      where: {
        id: { in: [player1Id as string, player2Id as string] }
      },
      include: {
        statistics: true,
      }
    });

    if (players.length !== 2) {
      res.status(404).json({ error: 'One or both players not found' });
      return;
    }

    res.status(200).json({
      player1: players.find(p => p.id === player1Id),
      player2: players.find(p => p.id === player2Id),
      // Future logic: Send to Python AI for "AI Summary" comparison
    });

  } catch (error) {
    console.error('Error comparing players:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
