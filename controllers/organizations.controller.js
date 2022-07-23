import express from 'express';
import mongoose from 'mongoose';

import OrganizationModel from '../models/organization.model.js';

const router = express.Router();

export const getOrganizations = async (req, res) => { 
    try {
        const organizationModels = await OrganizationModel.find();
                
       return res.status(200).json(organizationModels);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export const getOrganization = async (req, res) => { 
    const { id } = req.params;

    try {
        const organization = await OrganizationModel.findById(id);
        
       return res.status(200).json(organization);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export const createOrganization = async (req, res) => {
    
    const { name, ceo, president, vice_president, image  } = req.body;
 
    const newOrganizationModel = new OrganizationModel({ name, ceo, president, vice_president, image })
     
    try {
        await newOrganizationModel.save();

       return res.status(201).json(newOrganizationModel );
    } catch (error) {
       return  res.status(409).json({ message: error.message });
    }
}

export const updateOrganization = async (req, res) => {
    const { id } = req.params;
    const { name, ceo, president, vice_president, image  } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No organization with id: ${id}`);

    const updatedOrganization = {name, ceo, president, vice_president, image , _id: id };

    await OrganizationModel.findByIdAndUpdate(id, updatedOrganization, { new: true });

    return res.json(updatedOrganization);
}

export const deleteOrganization = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No organization with id: ${id}`);

    await OrganizationModel.findByIdAndRemove(id);

    return res.json({ message: "Organization deleted successfully." });
}



export default router;