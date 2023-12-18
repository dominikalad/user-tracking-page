const express = require('express');
const router = express.Router();
const PageAccess = require('../models/PageAccess');


router.post('/storePageAccess', async (req, res) => {
    try {
        const newAccess = new PageAccess({ userId: req.body.userId });
        await newAccess.save();
        res.status(201).send('Page access logged successfully.');
    } catch (error) {
        res.status(500).send(`Error logging page access: ${error.message}`);
    }
});

module.exports = router;