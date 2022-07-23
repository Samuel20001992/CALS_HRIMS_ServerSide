import mongoose from 'mongoose';


const shiftSchema = mongoose.Schema({
    employeeID: String,
    shift:String,
    from: Date,
    to: Date,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var ShiftModel = mongoose.model('ShiftModel', shiftSchema);

export default ShiftModel;