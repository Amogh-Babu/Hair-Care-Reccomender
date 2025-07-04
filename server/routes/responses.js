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

module.exports = router;