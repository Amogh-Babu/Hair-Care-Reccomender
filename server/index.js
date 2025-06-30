const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const responseRoutes = require('./routes/responses');
const app = express();

require('dotenv').config();

const PORT = 4000;
const mongoURI = process.env.MONGODBKEY

app.use(express.json());
app.use(cors());
app.use('/api', responseRoutes);

app.get('/', (req, res) => {
    res.send('Up and Running');
});

mongoose.connect(mongoURI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Mongo connection error:', err))

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`)
})

//Use ML models / APIs (later, once you’re comfortable)

// Weight inputs, do scoring systems

// Save recommendations history for user

// Let users rate recommendations and improve logic