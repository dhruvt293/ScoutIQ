import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('query');
    const position = searchParams.get('position');
    const minAge = searchParams.get('minAge');
    const maxAge = searchParams.get('maxAge');
    const minRating = searchParams.get('minRating');

    const where: any = {};
    if (query) {
      where.name = { contains: query, mode: 'insensitive' };
    }
    if (position) {
      where.position = { equals: position, mode: 'insensitive' };
    }
    if (minAge) {
      where.age = { ...where.age, gte: parseInt(minAge) };
    }
    if (maxAge) {
      where.age = { ...where.age, lte: parseInt(maxAge) };
    }
    if (minRating) {
      where.overallRating = { gte: parseInt(minRating) };
    }

    const players = await prisma.player.findMany({
      where,
      take: 20,
      orderBy: { overallRating: 'desc' },
    });

    return NextResponse.json(players);
  } catch (error) {
    console.error('Error searching players:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
