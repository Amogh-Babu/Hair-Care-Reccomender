const mongoose = require('mongoose');

const responseSchema = new mongoose.Schema({
    hairTypeNum: Number,
    hairTypeAlpha: String,
    density: Number,
    oiliness: Number,
    dandruff: Boolean,
    goals: [String],
    headcovering: Boolean,
    workout: Boolean,
    heat: Boolean,
    timeRange: [Number],
    budgRange: [Number]
})

const Response = mongoose.model('Response', responseSchema);
module.exports = Response;