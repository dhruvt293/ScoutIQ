import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const player1Id = searchParams.get('player1Id');
    const player2Id = searchParams.get('player2Id');

    if (!player1Id || !player2Id) {
      return NextResponse.json({ error: 'player1Id and player2Id are required' }, { status: 400 });
    }

    const players = await prisma.player.findMany({
      where: {
        id: { in: [player1Id, player2Id] },
      },
      include: {
        statistics: true,
      },
    });

    if (players.length !== 2) {
      return NextResponse.json({ error: 'One or both players not found' }, { status: 404 });
    }

    return NextResponse.json({
      player1: players.find((p) => p.id === player1Id),
      player2: players.find((p) => p.id === player2Id),
    });
  } catch (error) {
    console.error('Error comparing players:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
