import express from 'express';

import { getBankAccounts, getBankAccount, createBankAccount, updateBankAccount, deleteBankAccount } from '../controllers/bankAccount.controller.js';

const router = express.Router();

router.get('/', getBankAccounts);
router.post('/', createBankAccount);
router.get('/:id', getBankAccount);
router.patch('/:id', updateBankAccount);
router.delete('/:id', deleteBankAccount);


export default router;