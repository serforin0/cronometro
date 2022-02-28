import { Router } from 'express';
const router = Router();

import { getChronometer, createChronometer, deleteChronometer } from '../controllers/chronometer_controller';


router.get('/', getChronometer);
router.post('/', createChronometer);
router.delete('/:id', deleteChronometer);
export default router;