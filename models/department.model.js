import mongoose from 'mongoose';

const departmentSchema = mongoose.Schema({
    name: String,
    head: String,
    org: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var DepartmentModel = mongoose.model('DepartmentModel', departmentSchema);

export default DepartmentModel;