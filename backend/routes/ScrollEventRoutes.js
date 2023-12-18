const express = require('express');
const router = express.Router();
const ScrollEvent = require('../models/ScrollEvent');


router.post('/recordScrollEvent', async (req, res) => {
    try {
        const newScrollEvent = new ScrollEvent({ userId: req.body.userId })
        await newScrollEvent.save();
        res.status(201).send('Scroll event recorded successfully.');
    } catch (error) {
        res.status(500).send(`Error recording scroll event: ${error.message}`);
    }
});

module.exports = router;