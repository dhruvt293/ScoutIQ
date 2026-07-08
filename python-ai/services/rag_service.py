import os
from sentence_transformers import SentenceTransformer
import faiss
import numpy as np

# Load a lightweight embedding model for demo purposes
model = SentenceTransformer('all-MiniLM-L6-v2')
dimension = 384
index = faiss.IndexFlatL2(dimension)

# Mock knowledge base of documents
knowledge_base = [
    {"id": "doc_1", "content": "Sunil Chhetri is known for his incredible leadership and clinical finishing in the ISL."},
    {"id": "doc_2", "content": "Lallianzuala Chhangte possesses explosive pace, making him one of the best wingers in India."},
    {"id": "doc_3", "content": "Sandesh Jhingan provides a strong aerial presence and aggressive defending at the back."},
    {"id": "doc_4", "content": "Sahal Abdul Samad is a creative midfielder with excellent dribbling skills in tight spaces."},
]

# Initialize FAISS with mock data
embeddings = model.encode([doc["content"] for doc in knowledge_base])
index.add(np.array(embeddings).astype('float32'))

def retrieve_knowledge(query: str, top_k: int = 2) -> list:
    """
    Retrieves the most relevant football knowledge chunks using FAISS and SentenceTransformers.
    """
    query_vector = model.encode([query])
    distances, indices = index.search(np.array(query_vector).astype('float32'), top_k)
    
    results = []
    for idx in indices[0]:
        if idx < len(knowledge_base):
            results.append(knowledge_base[idx])
            
    return results

def generate_rag_answer(query: str) -> str:
    """
    Mimics a RAG pipeline by retrieving context and returning an AI-generated answer.
    """
    retrieved_docs = retrieve_knowledge(query)
    context = "\n".join([doc["content"] for doc in retrieved_docs])
    
    # Mocking the Gemini API call here
    # A real implementation would inject the 'context' into a prompt for Gemini
    
    answer = f"Based on our scouting database:\n{context}\n\n(AI Analysis): This indicates strong potential for the specified query in the Indian context."
    return answer
