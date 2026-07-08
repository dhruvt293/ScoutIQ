from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os

app = FastAPI(title="ScoutIQ AI Microservice")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins for development
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class PredictRequest(BaseModel):
    player_id: str

from models.predict import predict_future_metrics
from agents.workflow import generate_scout_report_indian_context
from services.rag_service import generate_rag_answer

@app.get("/")
def read_root():
    return {"message": "Welcome to ScoutIQ AI Microservice"}

@app.post("/predict")
def predict_future(request: PredictRequest):
    # Mocking current state of a player for Indian context
    result = predict_future_metrics(player_age=25, current_rating=75, position="Midfielder")
    return {
        "player_id": request.player_id,
        **result
    }

class ReportRequest(BaseModel):
    player_name: str
    position: str
    stats: dict

@app.post("/generate-report")
def generate_report(request: ReportRequest):
    report = generate_scout_report_indian_context(
        player_name=request.player_name,
        position=request.position,
        stats=request.stats
    )
    return {"report": report}

class RagQuery(BaseModel):
    query: str

@app.post("/semantic-search")
def semantic_search(request: RagQuery):
    answer = generate_rag_answer(request.query)
    return {"answer": answer}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
