const Waxing = require('../models/waxingModel');

const getAllWaxing = () => Waxing.find();

module.exports = {
    getAllWaxing,
}