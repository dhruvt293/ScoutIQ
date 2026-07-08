import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { player_id } = body;

    // Mocking current state of a player for Indian context (migrated from Python)
    const result = {
      predicted_rating: 78,
      market_value_forecast: 3.5, // Crores
      injury_risk: "Low",
      performance_trend: "Upward",
      potential_growth: 3.0,
      confidence_score: 0.85
    };

    return NextResponse.json({
      player_id,
      ...result
    });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
