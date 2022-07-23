import express from 'express';

import { getBasicInformations, getBasicInformation, createBasicInformation, updateBasicInformation, deleteBasicInformation } from '../controllers/basicInformations.controller.js';

const router = express.Router();

router.get('/', getBasicInformations);
router.post('/', createBasicInformation);
router.get('/:id', getBasicInformation);
router.patch('/:id', updateBasicInformation);
router.delete('/:id', deleteBasicInformation);


export default router;