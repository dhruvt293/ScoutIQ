import { NextResponse } from 'next/server';

const knowledge_base = [
  { id: "doc_1", content: "Sunil Chhetri is known for his incredible leadership and clinical finishing in the ISL." },
  { id: "doc_2", content: "Lallianzuala Chhangte possesses explosive pace, making him one of the best wingers in India." },
  { id: "doc_3", content: "Sandesh Jhingan provides a strong aerial presence and aggressive defending at the back." },
  { id: "doc_4", content: "Sahal Abdul Samad is a creative midfielder with excellent dribbling skills in tight spaces." },
];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { query } = body;

    // Simple mock retrieval based on keywords
    const lowerQuery = (query || '').toLowerCase();
    const retrieved_docs = knowledge_base.filter(doc => 
      lowerQuery.includes(doc.content.split(' ')[0].toLowerCase()) || 
      lowerQuery.includes('india') || 
      lowerQuery.includes('isl')
    ).slice(0, 2);

    if (retrieved_docs.length === 0) retrieved_docs.push(knowledge_base[0]); // Fallback

    const context = retrieved_docs.map(doc => doc.content).join('\n');
    
    const answer = `Based on our scouting database:\n${context}\n\n(AI Analysis): This indicates strong potential for the specified query in the Indian context.`;

    return NextResponse.json({ answer });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
