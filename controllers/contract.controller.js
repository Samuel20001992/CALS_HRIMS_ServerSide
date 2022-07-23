import express from 'express';
import mongoose from 'mongoose';

import ContractModel from '../models/contract.model.js';

const router = express.Router();

export const getContracts = async (req, res) => { 
    try {
        const contractModels = await ContractModel.find();
                console.log(contractModels)
       return res.status(200).json(contractModels);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export const getContract = async (req, res) => { 
    const { id } = req.params;

    try {
        const contract = await ContractModel.findById(id);
        
       return res.status(200).json(contract);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export const createContract = async (req, res) => {
    
    const {  employeeID,
    contractType,
    contractTitle,
    from,
    to,
    designation,
    description} = req.body;
    console.log(req.body)
    const newContractModel = new ContractModel({
        employeeID,
    contractType,
    contractTitle,
    from,
    to,
    designation,
    description })
     
    try {
        await newContractModel.save();
       console.log(newContractModel)
       return res.status(201).json(newContractModel );
    } catch (error) {
       return  res.status(409).json({ message: error.message });
    }
}

export const updateContract = async (req, res) => {
    const { id } = req.params;
    const {employeeID,
    contractType,
    contractTitle,
    from,
    to,
    designation,
    description } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No contract with id: ${id}`);

    const updatedContract = {employeeID,
    contractType,
    contractTitle,
    from,
    to,
    designation,
    description, _id: id };

    await ContractModel.findByIdAndUpdate(id, updatedContract, { new: true });

    return res.json(updatedContract);
}

export const deleteContract = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No contract with id: ${id}`);

    await ContractModel.findByIdAndRemove(id);

    return res.json({ message: "Contract deleted successfully." });
}



export default router;