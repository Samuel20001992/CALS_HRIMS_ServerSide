import express from 'express';

import { getShifts, getShift, createShift, updateShift, deleteShift } from '../controllers/shift.controller.js';

const router = express.Router();

router.get('/', getShifts);
router.post('/', createShift);
router.get('/:id', getShift);
router.patch('/:id', updateShift);
router.delete('/:id', deleteShift);


export default router;