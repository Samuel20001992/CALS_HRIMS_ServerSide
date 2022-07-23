import express from 'express';

import { getLeaves, getLeave, createLeave, updateLeave, deleteLeave } from '../controllers/leave.controller.js';

const router = express.Router();

router.get('/', getLeaves);
router.post('/', createLeave);
router.get('/:id', getLeave);
router.patch('/:id', updateLeave);
router.delete('/:id', deleteLeave);


export default router;