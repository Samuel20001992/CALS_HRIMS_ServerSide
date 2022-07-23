import mongoose from 'mongoose';


const workExperianceSchema = mongoose.Schema({
    employeeID: String,
    company_name: String,
    position: String,
        from: String,
        to: String,
    descrition: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var WorkExperianceModel = mongoose.model('WorkExperianceModel', workExperianceSchema);

export default WorkExperianceModel;