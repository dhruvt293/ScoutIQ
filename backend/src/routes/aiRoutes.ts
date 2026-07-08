import { Router, Request, Response } from 'express';
import axios from 'axios';
import { requireAuth } from '../middleware/authMiddleware';

const router = Router();
const PYTHON_AI_URL = process.env.PYTHON_AI_URL || 'http://localhost:8000';

router.post('/predict', async (req: Request, res: Response) => {
  try {
    const response = await axios.post(`${PYTHON_AI_URL}/predict`, req.body);
    res.status(200).json(response.data);
  } catch (error: any) {
    console.error('Error from AI Microservice:', error.message);
    res.status(500).json({ error: 'AI Microservice Error' });
  }
});

router.post('/generate-report', async (req: Request, res: Response) => {
  try {
    const response = await axios.post(`${PYTHON_AI_URL}/generate-report`, req.body);
    res.status(200).json(response.data);
  } catch (error: any) {
    console.error('Error from AI Microservice:', error.message);
    res.status(500).json({ error: 'AI Microservice Error' });
  }
});

router.post('/semantic-search', async (req: Request, res: Response) => {
  try {
    const response = await axios.post(`${PYTHON_AI_URL}/semantic-search`, req.body);
    res.status(200).json(response.data);
  } catch (error: any) {
    console.error('Error from AI Microservice:', error.message);
    res.status(500).json({ error: 'AI Microservice Error' });
  }
});

export default router;
