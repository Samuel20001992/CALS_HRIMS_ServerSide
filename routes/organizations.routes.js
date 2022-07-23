import express from 'express';

import { getOrganizations, getOrganization, createOrganization, updateOrganization, deleteOrganization } from '../controllers/organizations.controller.js';

const router = express.Router();

router.get('/', getOrganizations);
router.post('/', createOrganization);
router.get('/:id', getOrganization);
router.patch('/:id', updateOrganization);
router.delete('/:id', deleteOrganization);


export default router;