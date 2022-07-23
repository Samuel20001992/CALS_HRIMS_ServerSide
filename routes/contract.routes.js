import express from 'express';

import { getContracts, getContract, createContract, updateContract, deleteContract } from '../controllers/contract.controller.js';

const router = express.Router();

router.get('/', getContracts);
router.post('/', createContract);
router.get('/:id', getContract);
router.patch('/:id', updateContract);
router.delete('/:id', deleteContract);


export default router;