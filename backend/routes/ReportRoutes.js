const express = require('express');
const router = express.Router();
const PageAccess = require('../models/PageAccess');
const ScrollEvent = require('../models/ScrollEvent');


router.get('/report', async (req, res) => {
    try {
        const uniqueUserIds = await PageAccess.distinct('userId');
        const totalUsers = uniqueUserIds.length;
        const usersWhoScrolled = await ScrollEvent.distinct('userId');
        const filteredUsersWhoScrolled = usersWhoScrolled.filter(userId => uniqueUserIds.includes(userId));
        const percentageScrolled = totalUsers === 0 ? 0 : Math.round((filteredUsersWhoScrolled.length / totalUsers) * 100);

        res.json({
            totalUsers,
            percentageScrolled
        });
    } catch (error) {
        res.status(500).send(`Error fetching report data: ${error.message}`);
    }
});

module.exports = router;