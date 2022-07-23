import mongoose from 'mongoose';

const organizationSchema = mongoose.Schema({
    name: String,
    ceo: String,
    president: String,
    vice_president: String,
    image: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var OrganizationModel = mongoose.model('OrganizationModel', organizationSchema);

export default OrganizationModel;