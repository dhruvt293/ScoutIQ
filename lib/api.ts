const API_BASE_URL = '/api';

export async function fetchPlayers() {
  try {
    const response = await fetch(`${API_BASE_URL}/players/search`);
    if (!response.ok) throw new Error('Failed to fetch players');
    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    return [];
  }
}

export async function generateScoutReport(playerData: any) {
  try {
    const response = await fetch(`${API_BASE_URL}/ai/generate-report`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(playerData),
    });
    if (!response.ok) throw new Error('Failed to generate report');
    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    return null;
  }
}

export async function getPlayerPrediction(playerId: string) {
  try {
    const response = await fetch(`${API_BASE_URL}/ai/predict`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ player_id: playerId }),
    });
    if (!response.ok) throw new Error('Failed to get prediction');
    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    return null;
  }
}
