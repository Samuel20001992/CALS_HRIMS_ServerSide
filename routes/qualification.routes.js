import express from 'express';

import { getQualifications, getQualification, createQualification, updateQualification, deleteQualification } from '../controllers/qualification.controller.js';

const router = express.Router();

router.get('/', getQualifications);
router.post('/', createQualification);
router.get('/:id', getQualification);
router.patch('/:id', updateQualification);
router.delete('/:id', deleteQualification);


export default router;