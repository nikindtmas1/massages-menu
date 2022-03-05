const mongoose = require('mongoose');

const faceSchema = new mongoose.Schema({
    name: String,
    img: String,
    type: String,
    time: String,
    price: String,
    description: String,
    likes: Number,
});

module.exports = mongoose.model('Faces', faceSchema);