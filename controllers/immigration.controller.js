import express from 'express';
import mongoose from 'mongoose';

import ImmigrationModel from '../models/immigration.model.js';

const router = express.Router();

export const getImmigrations = async (req, res) => { 
    try {
        const immigrationModels = await ImmigrationModel.find();
                
       return res.status(200).json(immigrationModels);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export const getImmigration = async (req, res) => { 
    const { id } = req.params;

    try {
        const immigration = await ImmigrationModel.findById(id);
        
       return res.status(200).json(immigration);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export const createImmigration = async (req, res) => {
    
    const { employeeID,
    documnet,
    documentNumber,
    issueDate,
    expiryDate,
    eligibleReviewDate,
    country} = req.body;
 
    const newImmigrationModel = new ImmigrationModel({ employeeID,
    documnet,
    documentNumber,
    issueDate,
    expiryDate,
    eligibleReviewDate,
    country })
     
    try {
        await newImmigrationModel.save();
        console.log(newImmigrationModel);
       return res.status(201).json(newImmigrationModel );
    } catch (error) {
       return  res.status(409).json({ message: error.message });
    }
}

export const updateImmigration = async (req, res) => {
    const { id } = req.params;
    const {employeeID,
    documnet,
    documentNumber,
    issueDate,
    expiryDate,
    eligibleReviewDate,
    country  } = req.body;
    
    console.log(employeeID);

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No immigration with id: ${id}`);

    const updatedImmigration = {employeeID,
    documnet,
    documentNumber,
    issueDate,
    expiryDate,
    eligibleReviewDate,
    country, _id: id };

    await ImmigrationModel.findByIdAndUpdate(id, updatedImmigration, { new: true });

    return res.json(updatedImmigration);
}

export const deleteImmigration = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No immigration with id: ${id}`);

    await ImmigrationModel.findByIdAndRemove(id);

    return res.json({ message: "Immigration deleted successfully." });
}



export default router;