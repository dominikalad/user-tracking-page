const mongoose = require('mongoose');

const pageAccessSchema = new mongoose.Schema({
    userId: String,
    accessTime: { type: Date, default: Date.now },
});

module.exports = mongoose.model('PageAccess', pageAccessSchema)
