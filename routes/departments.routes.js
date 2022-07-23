import express from 'express';

import { getDepartments, getDepartment, createDepartment, updateDepartment, deleteDepartment } from '../controllers/departments.controller.js';

const router = express.Router();

router.get('/', getDepartments);
router.post('/', createDepartment);
router.get('/:id', getDepartment);
router.patch('/:id', updateDepartment);
router.delete('/:id', deleteDepartment);


export default router;