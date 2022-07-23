import mongoose from 'mongoose';


const emergencyContactSchema = mongoose.Schema({
    employeeID: String,
    firstName: String,
    middleName: String,
    lastName: String,
    relation: String,
    email: String,
    address: String,
    contactNumber: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var EmergencyContactModel = mongoose.model('EmergencyContactModel', emergencyContactSchema);

export default EmergencyContactModel;