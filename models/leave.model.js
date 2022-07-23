import mongoose from 'mongoose';


const leaveSchema = mongoose.Schema({
    employeeID: String,
    leaveType: String,
    from: String,
    to: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var LeaveModel = mongoose.model('LeaveModel', leaveSchema);

export default LeaveModel;