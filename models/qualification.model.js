import mongoose from 'mongoose';


const qualificationSchema = mongoose.Schema({
    employeeID: String,
    university: String,
    education_level: String,
    from: String,
    to: String,
    field:String,
    description: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var QualificationModel = mongoose.model('QualificationModel', qualificationSchema);

export default QualificationModel;