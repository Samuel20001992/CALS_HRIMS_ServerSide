
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import departmentRoutes from './routes/departments.routes.js';
import organizationRoutes from './routes/organizations.routes.js';
import basicInformationRoutes from './routes/basicInformations.routes.js';
import bankAccountRoutes from './routes/bankAccount.routes.js';
import immigrationRoutes from './routes/immigeration.routes.js';
import contractRoutes from './routes/contract.routes.js';
import qualificationRoutes from './routes/qualification.routes.js';
import workExperianceRoutes from './routes/workExperiance.routes.js';
import emmergencyContactRoutes from './routes/emergencyContact.routes.js';  
import leaveRoutes from './routes/leave.routes.js';
import announcementRoutes from './routes/announcement.routes.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/departments', departmentRoutes);
app.use('/organizations', organizationRoutes);
app.use('/basicInformations', basicInformationRoutes);
app.use('/bankAccounts', bankAccountRoutes);
app.use('/immigrations', immigrationRoutes);
app.use('/contracts', contractRoutes);
app.use('/qualifications', qualificationRoutes);
app.use('/workExperiances', workExperianceRoutes);
app.use('/emmergencyContacts', emmergencyContactRoutes);
app.use('/leaves', leaveRoutes);
app.use('/announcements', announcementRoutes);

const CONNECTION_URL = 'mongodb://localhost:27017/mydb';
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

