import mongoose from 'mongoose';


const contractSchema = mongoose.Schema({
    employeeID: String,
    contractType: String,
    contractTitle: String,
    from: String,
    to: String,
    designation: String,
    description: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var ContractModel = mongoose.model('ContractModel', contractSchema);

export default ContractModel;