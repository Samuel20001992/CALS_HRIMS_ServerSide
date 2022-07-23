import express from 'express';
import mongoose from 'mongoose';

import BankAccountModel from '../models/bankAccount.model.js';

const router = express.Router();

export const getBankAccounts = async (req, res) => { 
    try {
        const bankAccountModels = await BankAccountModel.find();
        console.log(bankAccountModels);
       return res.status(200).json(bankAccountModels);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export const getBankAccount = async (req, res) => { 
    const { id } = req.params;

    try {
        const bankAccount = await BankAccountModel.findById(id);
        
       return res.status(200).json(bankAccount);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export const createBankAccount = async (req, res) => {
    
    const {  employeeID, accountType, bankName, accountNumber, bankCode } = req.body;
 
    const newBankAccountModel = new BankAccountModel({ employeeID, accountType, bankName, accountNumber, bankCode })
     
    try {
        await newBankAccountModel.save();

       return res.status(201).json(newBankAccountModel );
    } catch (error) {
       return  res.status(409).json({ message: error.message });
    }
}

export const updateBankAccount = async (req, res) => {
    const { id } = req.params;
    const {employeeID, accountType, bankName, accountNumber, bankCode  } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No bankAccount with id: ${id}`);

    const updatedBankAccount = {employeeID, accountType, bankName, accountNumber, bankCode, _id: id };

    await BankAccountModel.findByIdAndUpdate(id, updatedBankAccount, { new: true });

    return res.json(updatedBankAccount);
}

export const deleteBankAccount = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No bankAccount with id: ${id}`);

    await BankAccountModel.findByIdAndRemove(id);

    return res.json({ message: "BankAccount deleted successfully." });
}



export default router;