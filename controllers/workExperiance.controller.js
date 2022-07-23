import express from 'express';
import mongoose from 'mongoose';

import WorkExperianceModel from '../models/workExperiance.model.js';

const router = express.Router();

export const getWorkExperiances = async (req, res) => { 
    try {
        const workExperianceModels = await WorkExperianceModel.find();
                
       return res.status(200).json(workExperianceModels);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export const getWorkExperiance = async (req, res) => { 
    const { id } = req.params;

    try {
        const workExperiance = await WorkExperianceModel.findById(id);
        
       return res.status(200).json(workExperiance);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export const createWorkExperiance = async (req, res) => {
    
    const { employeeID, company_name, position, from, to} = req.body;
 
    const newWorkExperianceModel = new WorkExperianceModel({ employeeID, company_name, position, from, to })
     
    try {
        await newWorkExperianceModel.save();

       return res.status(201).json(newWorkExperianceModel );
    } catch (error) {
       return  res.status(409).json({ message: error.message });
    }
}

export const updateWorkExperiance = async (req, res) => {
    const { id } = req.params;
    const {employeeID, company_name, position, from, to } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No workExperiance with id: ${id}`);

    const updatedWorkExperiance = {employeeID, company_name, position, from, to, _id: id };

    await WorkExperianceModel.findByIdAndUpdate(id, updatedWorkExperiance, { new: true });

    return res.json(updatedWorkExperiance);
}

export const deleteWorkExperiance = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No workExperiance with id: ${id}`);

    await WorkExperianceModel.findByIdAndRemove(id);

    return res.json({ message: "WorkExperiance deleted successfully." });
}



export default router;