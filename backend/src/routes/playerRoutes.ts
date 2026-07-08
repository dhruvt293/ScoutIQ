import { Router } from 'express';
import { searchPlayers, getPlayerById, comparePlayers } from '../controllers/playerController';
import { requireAuth } from '../middleware/authMiddleware';

const router = Router();

// Apply auth middleware if you want all player routes protected
// router.use(requireAuth);

router.get('/search', searchPlayers);
router.get('/compare', comparePlayers);
router.get('/:id', getPlayerById);

export default router;
