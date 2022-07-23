import mongoose from 'mongoose';


const announcementSchema = mongoose.Schema({
    title: String,
    start_date: String,
    end_date: String,
    company: String,
    location: String,
    department: String,
    description: String,
    summary: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var AnnouncementModel = mongoose.model('AnnouncementModel', announcementSchema);

export default AnnouncementModel;