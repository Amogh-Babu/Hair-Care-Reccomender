const express = require('express');
const router = express.Router();
const Response = require('../models/Response')

router.post('/submit', async (req, res) => {
    try {
        const userInput = { 
            hair_type: "" + req.body.hairTypeNum + req.body.hairTypeAlpha,
            density: Number(req.body.density),
            oiliness: Number(req.body.oiliness),
            dandruff: req.body.dandruff,
            goals: req.body.goals,
            headcovering: req.body.headcovering,
            workout: req.body.workout,
            heat: req.body.heat,
            time_range: req.body.timeRange,
            budget_range: req.body.budgRange
        };

        const newResponse = new Response(userInput);
        const savedResponse = await newResponse.save();

        const recRes = await fetch('http://localhost:8000/recommend', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userInput)
        });

        const recommendation = await recRes.json();
        res.json(recommendation)

    } catch (err) {
        res.status(500).json({ error: 'Could not save response', details: err});
    }
});

module.exports = router;