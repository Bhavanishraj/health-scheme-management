const Doctor = require('./schema/doctor_schema');

const express = require('express');
const app = express();
const port =  process.env.PORT || 3001;

app.use(express.json());

const cors = require('cors');
app.use(cors());

app.listen(port, () =>{
    console.log(`Server is running on the port ${port}`)
});

const mongoose = require('mongoose');
const url = "mongodb+srv://roshini:smartindiahackathon@healthdatamanagement.a8rwb.mongodb.net/HealthDataManagement";

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.get('/api/doctors', async (req, res) => {
    try {
        const doctors = await Doctor.find();
        res.json(doctors);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});