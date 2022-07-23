import express from 'express';
import mongoose from 'mongoose';

import EmergencyContactModel from '../models/emergencyContact.model.js';

const router = express.Router();

export const getEmergencyContacts = async (req, res) => { 
    try {
        const emergencyContactModels = await EmergencyContactModel.find();
                
       return res.status(200).json(emergencyContactModels);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export const getEmergencyContact = async (req, res) => { 
    const { id } = req.params;

    try {
        const emergencyContact = await EmergencyContactModel.findById(id);
        
       return res.status(200).json(emergencyContact);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export const createEmergencyContact = async (req, res) => {
    
    const {  employeeID, firstName, middleName, lastName, relation,email,address, contactNumber} = req.body;
 
    const newEmergencyContactModel = new EmergencyContactModel({ employeeID, firstName, middleName, lastName, relation,email,address, contactNumber})
     
    try {
        await newEmergencyContactModel.save();

       return res.status(201).json(newEmergencyContactModel );
    } catch (error) {
       return  res.status(409).json({ message: error.message });
    }
}

export const updateEmergencyContact = async (req, res) => {
    const { id } = req.params;
    const {employeeID, firstName, middleName, lastName, relation,email,address, contactNumber} = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No emergencyContact with id: ${id}`);

    const updatedEmergencyContact = {employeeID, firstName, middleName, lastName, relation,email,address, contactNumber, _id: id };

    await EmergencyContactModel.findByIdAndUpdate(id, updatedEmergencyContact, { new: true });

    return res.json(updatedEmergencyContact);
}

export const deleteEmergencyContact = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No emergencyContact with id: ${id}`);

    await EmergencyContactModel.findByIdAndRemove(id);

    return res.json({ message: "EmergencyContact deleted successfully." });
}



export default router;