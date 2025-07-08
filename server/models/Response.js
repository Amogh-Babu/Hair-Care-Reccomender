const mongoose = require('mongoose');

const responseSchema = new mongoose.Schema({
    hair_type: String,
    density: Number,
    oiliness: Number,
    dandruff: Boolean,
    goals: [String],
    headcovering: Boolean,
    workout: Boolean,
    heat: Boolean,
    time_range: [Number],
    budget_range: [Number]
})

const Response = mongoose.model('Response', responseSchema);
module.exports = Response;