import express from 'express';
import mongoose from 'mongoose';

import AnnouncementModel from '../models/announcement.model.js';

const router = express.Router();

export const getAnnouncements = async (req, res) => { 
    try {
        const announcementModels = await AnnouncementModel.find();
        console.log(announcementModels);
       return res.status(200).json(announcementModels);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export const getAnnouncement = async (req, res) => { 
    const { id } = req.params;

    try {
        const announcement = await AnnouncementModel.findById(id);
        
       return res.status(200).json(announcement);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export const createAnnouncement = async (req, res) => {
    
    const { title, start_date, end_date, company, location,department,description, summary} = req.body;
 
    const newAnnouncementModel = new AnnouncementModel({ title, start_date, end_date, company, location,department,description, summary })
     
    try {
        await newAnnouncementModel.save();

       return res.status(201).json(newAnnouncementModel );
    } catch (error) {
       return  res.status(409).json({ message: error.message });
    }
}

export const updateAnnouncement = async (req, res) => {
    const { id } = req.params;
    const {title, start_date, end_date, company, location,department,description, summary  } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No announcement with id: ${id}`);

    const updatedAnnouncement = {title, start_date, end_date, company, location,department,description, summary, _id: id };

    await AnnouncementModel.findByIdAndUpdate(id, updatedAnnouncement, { new: true });

    return res.json(updatedAnnouncement);
}

export const deleteAnnouncement = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No announcement with id: ${id}`);

    await AnnouncementModel.findByIdAndRemove(id);

    return res.json({ message: "Announcement deleted successfully." });
}



export default router;