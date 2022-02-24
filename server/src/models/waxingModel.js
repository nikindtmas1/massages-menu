const mongoose = require('mongoose');

const waxingSchema = new mongoose.Schema({
    name: String,
    img: String,
    type: String,
    time: String,
    price: String,
    description: String
});

module.exports = mongoose.model('Waxing', waxingSchema);