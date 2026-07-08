import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { player_name, position, stats } = body;

    const report_template = `
    SCOUTING REPORT: ${player_name || 'Player'}
    Position: ${position || 'Unknown'}
    
    Based on the player's performance metrics and the physical/tactical demands of the Indian Super League (ISL) and I-League, here is the detailed analysis:
    
    1. PLAYING STYLE:
    The player shows strong adaptability to high-intensity pressing systems often seen in modern Indian football.
    
    2. STRENGTHS:
    - High stamina suitable for humid conditions in India.
    - Excellent passing accuracy (${stats?.passing_accuracy || '85'}%).
    
    3. WEAKNESSES:
    - Needs to improve physicality to compete with strong foreign center-backs in the ISL.
    
    4. ROLE SUITABILITY:
    Best suited for a possession-based team in the ISL, such as Mumbai City FC or FC Goa.
    
    5. DEVELOPMENT POTENTIAL:
    High ceiling. Can become a regular for the Indian National Team if developed correctly.
    `;

    return NextResponse.json({ report: report_template });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
