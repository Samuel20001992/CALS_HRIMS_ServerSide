import express from 'express';

import { getEmergencyContacts, getEmergencyContact, createEmergencyContact, updateEmergencyContact, deleteEmergencyContact } from '../controllers/emergencyContacts.controller.js';

const router = express.Router();

router.get('/', getEmergencyContacts);
router.post('/', createEmergencyContact);
router.get('/:id', getEmergencyContact);
router.patch('/:id', updateEmergencyContact);
router.delete('/:id', deleteEmergencyContact);


export default router;