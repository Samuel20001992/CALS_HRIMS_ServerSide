import mongoose from 'mongoose';


const basicInformationSchema = mongoose.Schema({
    employeeID: String,
    firstName: String,
    middleName: String,
    lastName: String,
    gender: String,
    dateofBirth: String,
    email: String,
    contactNumber: String,
    password: String,
    designation:String,
    basicSalary: String,
    headofDesignation: String,
    department: String,
    organization: String,
    address: String,
    image: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var BasicInformationModel = mongoose.model('BaiscInformationModel', basicInformationSchema);

export default BasicInformationModel;