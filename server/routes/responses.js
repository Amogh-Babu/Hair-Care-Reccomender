const express = require('express');
const router = express.Router();
const Response = require('../models/Response')

router.post('/responses', async (req, res) => {
    try {
        const { hairTypeNum,
            hairTypeAlpha,
            density,
            oiliness,
            dandruff,
            goals,
            headcovering,
            workout,
            heat,
            timeRange,
            budgRange } = req.body;


        const newResponse = new Response({
            hairTypeNum,
            hairTypeAlpha,
            density,
            oiliness,
            dandruff,
            goals,
            headcovering,
            workout,
            heat,
            timeRange,
            budgRange
        });

        const savedResponse = await newResponse.save();
        res.status(201).json(savedResponse);

    } catch (err) {
        res.status(500).json({ error: 'Could not save response', details: err});
    }
});

router.get('/responses', async (req, res) => {
    try {
        const responses = await Response.find().sort( {createdAt: -1});
        res.json(responses);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch responses', details: err})
    }
})

router.post('/recommendation', async (req, res) => {
    try {
        const userInput = { 
            hairtype: "" + req.body.hairTypeNum + req.body.hairTypeAlpha,
            density: req.body.density,
            oiliness: req.body.oiliness,
            dandruff: req.body.dandruff,
            goals: req.body.goals,
            headcovering: req.body.headcovering,
            workout: req.body.workout,
            heat: req.body.heat,
            time_range: req.body.timeRange,
            budget_range: req.body.budgRange
        };

        const recRes = await fetch('http://localhost:8000/recommend', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userInput)
        });

        const recommendation = await recRes.json();
        console.log(recommendation)
        res.json(recommendation)

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch reccomendation', details: err})
    }
})

module.exports = router;