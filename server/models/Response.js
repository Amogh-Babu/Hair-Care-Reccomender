const mongoose = require('mongoose');

const responseSchema = new mongoose.Schema({
    name: String,
    age: Number,
    feedback: String,
    submittedAt: {
        type: Date,
        default: Date.now
    }
})

const Response = mongoose.model('Response', responseSchema);
module.exports = Response;