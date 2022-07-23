import express from 'express';
import mongoose from 'mongoose';

import BasicInformationMessage from '../models/basicInformation.model.js';

const router = express.Router();

export const getBasicInformations = async (req, res) => { 
    try {
        const basicInformationMessages = await BasicInformationMessage.find();
                
       return res.status(200).json(basicInformationMessages);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export const getBasicInformation = async (req, res) => { 
    const { id } = req.params;

    try {
        const basicInformation = await BasicInformationMessage.findById(id);
        
       return res.status(200).json(basicInformation);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export const createBasicInformation = async (req, res) => {
    
    const {  employeeID, firstName, middleName, lastName, gender,dateofBirth,email, contactNumber, password,designation,basicSalary,headofDesignation,department,organization} = req.body;
 
    const newBasicInformationMessage = new BasicInformationMessage({ employeeID, firstName, middleName, lastName, gender,dateofBirth,email, contactNumber, password,designation,basicSalary,headofDesignation,department,organization })
     
    try {
        await newBasicInformationMessage.save();

       return res.status(201).json(newBasicInformationMessage );
    } catch (error) {
       return  res.status(409).json({ message: error.message });
    }
}

export const updateBasicInformation = async (req, res) => {
    const { id } = req.params;
    const {employeeID, firstName, middleName, lastName, gender,dateofBirth,email, contactNumber, password,designation,basicSalary,headofDesignation,department,organization  } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No basicInformation with id: ${id}`);

    const updatedBasicInformation = {employeeID, firstName, middleName, lastName, gender,dateofBirth,email, contactNumber, password,designation,basicSalary,headofDesignation,department,organization, _id: id };

    await BasicInformationMessage.findByIdAndUpdate(id, updatedBasicInformation, { new: true });

    return res.json(updatedBasicInformation);
}

export const deleteBasicInformation = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No basicInformation with id: ${id}`);

    await BasicInformationMessage.findByIdAndRemove(id);

    return res.json({ message: "BasicInformation deleted successfully." });
}



export default router;