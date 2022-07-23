import express from 'express';
import mongoose from 'mongoose';

import ShiftModel from '../models/shift.model.js';

const router = express.Router();

export const getShifts = async (req, res) => { 
    try {
        const shiftModels = await ShiftModel.find();
                
       return res.status(200).json(shiftModels);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export const getShift = async (req, res) => { 
    const { id } = req.params;

    try {
        const shift = await ShiftModel.findById(id);
        
       return res.status(200).json(shift);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export const createShift = async (req, res) => {
    
    const {  employeeID, firstName, middleName, lastName, gender,dateofBirth,email, contactNumber, password,designation,basicSalary,headofDesignation,department,organization} = req.body;
 
    const newShiftModel = new ShiftModel({ employeeID, firstName, middleName, lastName, gender,dateofBirth,email, contactNumber, password,designation,basicSalary,headofDesignation,department,organization })
     
    try {
        await newShiftModel.save();

       return res.status(201).json(newShiftModel );
    } catch (error) {
       return  res.status(409).json({ message: error.message });
    }
}

export const updateShift = async (req, res) => {
    const { id } = req.params;
    const {employeeID, firstName, middleName, lastName, gender,dateofBirth,email, contactNumber, password,designation,basicSalary,headofDesignation,department,organization  } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No shift with id: ${id}`);

    const updatedShift = {employeeID, firstName, middleName, lastName, gender,dateofBirth,email, contactNumber, password,designation,basicSalary,headofDesignation,department,organization, _id: id };

    await ShiftModel.findByIdAndUpdate(id, updatedShift, { new: true });

    return res.json(updatedShift);
}

export const deleteShift = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No shift with id: ${id}`);

    await ShiftModel.findByIdAndRemove(id);

    return res.json({ message: "Shift deleted successfully." });
}



export default router;