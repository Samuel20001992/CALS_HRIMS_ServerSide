import express from 'express';
import mongoose from 'mongoose';

import DepartmentModel from '../models/department.model.js';

const router = express.Router();

export const getDepartments = async (req, res) => { 
    try {
        const departmentModels = await DepartmentModel.find();
                
       return res.status(200).json(departmentModels);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export const getDepartment = async (req, res) => { 
    const { id } = req.params;

    try {
        const department = await DepartmentModel.findById(id);
        
       return res.status(200).json(department);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export const createDepartment = async (req, res) => {
    
    const { name, head, org  } = req.body;
 
    const newDepartmentModel = new DepartmentModel({ name, head, org})
     
    try {
        await newDepartmentModel.save();

       return res.status(201).json(newDepartmentModel );
    } catch (error) {
       return  res.status(409).json({ message: error.message });
    }
}

export const updateDepartment = async (req, res) => {
    const { id } = req.params;
    const { name, head,org  } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No department with id: ${id}`);

    const updatedDepartment = {name, head,org  , _id: id };

    await DepartmentModel.findByIdAndUpdate(id, updatedDepartment, { new: true });

    return res.json(updatedDepartment);
}

export const deleteDepartment = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No department with id: ${id}`);

    await DepartmentModel.findByIdAndRemove(id);

    return res.json({ message: "Department deleted successfully." });
}



export default router;