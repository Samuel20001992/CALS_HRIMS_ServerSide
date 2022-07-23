import express from 'express';

import { getImmigrations, getImmigration, createImmigration, updateImmigration, deleteImmigration } from '../controllers/immigration.controller.js';

const router = express.Router();

router.get('/', getImmigrations);
router.post('/', createImmigration);
router.get('/:id', getImmigration);
router.patch('/:id', updateImmigration);
router.delete('/:id', deleteImmigration);


export default router;