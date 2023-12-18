const mongoose = require('mongoose');

const scrollEventSchema = new mongoose.Schema({
    userId: String,
    accessTime: { type: Date, default: Date.now },
});

module.exports = mongoose.model('ScrollEvent', scrollEventSchema);