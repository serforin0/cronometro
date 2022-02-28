import { Router } from 'express';
const router = Router();

import { getChronometer, createChronometer, deleteChronometer, getOneChronometer } from '../controllers/chronometer_controller';


router.get('/', getChronometer);
router.get('/:id', getOneChronometer)
router.post('/', createChronometer);
router.delete('/:id', deleteChronometer);
export default router;