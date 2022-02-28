import { Router } from 'express';
const router = Router();

import { createProject, getProjects, getoneProject, deleteProject } from '../controllers/project_controller';

router.post('/',  createProject);
router.get('/', getProjects);

router.get('/:id', getoneProject);
router.delete('/:id', deleteProject);


export default router;