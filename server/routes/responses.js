const express = require('express');
const router = express.Router();
const Response = require('../models/Response')

router.post('/responses', async (req, res) => {
    try {
        const { name, age, feedback} = req.body;

        const newResponse = new Response({
            name,
            age,
            feedback
        });

        const savedResponse = await newResponse.save();
        res.status(201).json(savedResponse);

    } catch (err) {
        res.status(500).json({ errpr: 'Could not save response', details: err});
    }
});

module.exports = router;