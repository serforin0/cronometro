import { Router } from 'express';
const router = Router();

import { getChronometer, createChronometer, deleteChronometer, getOneChronometer, getChronometerByProject } from '../controllers/chronometer_controller';


router.get('/', getChronometer);
router.get('/:id', getOneChronometer);
router.get('/project/:projectid', getChronometerByProject);
router.post('/', createChronometer);
router.delete('/:id', deleteChronometer);
export default router;