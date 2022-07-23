import mongoose from 'mongoose';


const bankAccountSchema = mongoose.Schema({
    employeeID: String,
    accountType: String,
    bankName: String,
    accountNumber: Number,
    bankCode: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var BankAccountModel = mongoose.model('BankAccountModel', bankAccountSchema);

export default BankAccountModel;