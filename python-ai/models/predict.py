import random

def predict_future_metrics(player_age: int, current_rating: int, position: str) -> dict:
    """
    Mock prediction model for demonstrating ML capabilities.
    In reality, this would use a loaded XGBoost or Scikit-Learn model trained on historical data.
    """
    # Indian context: players might peak slightly differently depending on position in ISL.
    
    growth_potential = max(0, 30 - player_age) * 0.5
    predicted_rating = current_rating + growth_potential + random.uniform(-2, 4)
    
    # Cap rating at 95
    predicted_rating = min(95.0, round(predicted_rating, 1))
    
    injury_risk = "Low"
    if player_age > 30 or random.random() > 0.8:
        injury_risk = "Medium"
    if player_age > 34:
        injury_risk = "High"
        
    market_value_base = (predicted_rating ** 2) * 1000  # In INR (rupees) logic if we want, or Euros.
    # Let's say market value in Crores (INR) for Indian context.
    market_value_cr = round(market_value_base / 1000000, 2)
    
    return {
        "futureRating": predicted_rating,
        "predictedMarketValue": f"₹{market_value_cr} Cr",
        "injuryRisk": injury_risk,
        "potentialGrowth": round(predicted_rating - current_rating, 1),
        "confidenceScore": round(random.uniform(0.75, 0.95), 2),
        "performanceTrend": "Upward" if predicted_rating > current_rating else "Stable"
    }
