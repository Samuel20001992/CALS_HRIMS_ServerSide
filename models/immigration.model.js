import mongoose from 'mongoose';


const immigerationSchema = mongoose.Schema({
    employeeID: String,
    documnet: String,
    documentNumber: String,
    issueDate: String,
    expiryDate: String,
    eligibleReviewDate: String,
    country: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var ImmigerationModel = mongoose.model('ImmigerationModel', immigerationSchema);

export default ImmigerationModel;