import express from 'express';

import { getWorkExperiances, getWorkExperiance, createWorkExperiance, updateWorkExperiance, deleteWorkExperiance } from '../controllers/workExperiance.controller.js';

const router = express.Router();

router.get('/', getWorkExperiances);
router.post('/', createWorkExperiance);
router.get('/:id', getWorkExperiance);
router.patch('/:id', updateWorkExperiance);
router.delete('/:id', deleteWorkExperiance);


export default router;
