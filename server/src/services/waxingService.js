const Waxing = require('../models/waxingModel');

const getAllWaxing = () => Waxing.find({});

const getOneWax = (id) => Waxing.findById(id);

const updateWax = (id, waxData) => Waxing.findByIdAndUpdate(id, waxData);

module.exports = {
    getAllWaxing,
    getOneWax,
    updateWax,
}