const express = require('express');
const mongoose = require('mongoose');
const responseRoutes = require('./routes/responses');
const app = express();

const PORT = 3000;
const mongoURI = 'mongodb+srv://AmoghBabu:AmoghIsAwesome@hair-care-reccomender.at0f6vj.mongodb.net/?retryWrites=true&w=majority&appName=Hair-Care-Reccomender';

app.use(express.json());
app.use('/api', responseRoutes);

app.get('/', (req, res) => {
    res.send('Up and Running');
});

mongoose.connect(mongoURI,)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Mongo connection error:', err))

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`)
})