import express from 'express';
import mongoose from 'mongoose';

import LeaveModel from '../models/leave.model.js';

const router = express.Router();

export const getLeaves = async (req, res) => { 
    try {
        const leaveModels = await LeaveModel.find();
                
       return res.status(200).json(leaveModels);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export const getLeave = async (req, res) => { 
    const { id } = req.params;

    try {
        const leave = await LeaveModel.findById(id);
        
       return res.status(200).json(leave);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export const createLeave = async (req, res) => {
    
    const {  employeeID, leaveType, from, to} = req.body;
 
    const newLeaveModel = new LeaveModel({  employeeID, leaveType, from, to})
     
    try {
        await newLeaveModel.save();

       return res.status(201).json(newLeaveModel );
    } catch (error) {
       return  res.status(409).json({ message: error.message });
    }
}

export const updateLeave = async (req, res) => {
    const { id } = req.params;
    const { employeeID, leaveType, from, to } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No leave with id: ${id}`);

    const updatedLeave = { employeeID, leaveType, from, to, _id: id };

    await LeaveModel.findByIdAndUpdate(id, updatedLeave, { new: true });

    return res.json(updatedLeave);
}

export const deleteLeave = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No leave with id: ${id}`);

    await LeaveModel.findByIdAndRemove(id);

    return res.json({ message: "Leave deleted successfully." });
}



export default router;