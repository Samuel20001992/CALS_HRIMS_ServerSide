import express from 'express';
import mongoose from 'mongoose';

import QualificationModel from '../models/qualification.model.js';

const router = express.Router();

export const getQualifications = async (req, res) => { 
    try {
        const qualificationModels = await QualificationModel.find();
                
       return res.status(200).json(qualificationModels);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export const getQualification = async (req, res) => { 
    const { id } = req.params;

    try {
        const qualification = await QualificationModel.findById(id);
        
       return res.status(200).json(qualification);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export const createQualification = async (req, res) => {
    
    const {employeeID, university, education_level, from, to,field,description} = req.body;
 
    const newQualificationModel = new QualificationModel({ employeeID, university, education_level, from, to,field,description })
     
    try {
        await newQualificationModel.save();

       return res.status(201).json(newQualificationModel );
    } catch (error) {
       return  res.status(409).json({ message: error.message });
    }
}

export const updateQualification = async (req, res) => {
    const { id } = req.params;
    const {employeeID, university, education_level, from, to,field,description } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No qualification with id: ${id}`);

    const updatedQualification = {employeeID, university, education_level, from, to,field,description, _id: id };

    await QualificationModel.findByIdAndUpdate(id, updatedQualification, { new: true });

    return res.json(updatedQualification);
}

export const deleteQualification = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No qualification with id: ${id}`);

    await QualificationModel.findByIdAndRemove(id);

    return res.json({ message: "Qualification deleted successfully." });
}



export default router;