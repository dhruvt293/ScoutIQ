import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// Routes will be imported here
import authRoutes from './routes/authRoutes';
import playerRoutes from './routes/playerRoutes';
import aiRoutes from './routes/aiRoutes';

app.use('/api/auth', authRoutes);
app.use('/api/players', playerRoutes);
app.use('/api/ai', aiRoutes);

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'ScoutIQ Backend is running' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
