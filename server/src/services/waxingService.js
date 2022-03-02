const Waxing = require('../models/waxingModel');

const getAllWaxing = () => Waxing.find({});

const getOne = (id) => Waxing.findById(id);


module.exports = {
    getAllWaxing,
    getOne,
}