const Massages = require('../models/massagesModel');

const getAll = () => Massages.find();

const getOneMassage = (id) => Massages.findById(id);

const updateMassage = (id, data) => Massages.findByIdAndUpdate(id, data);

module.exports = {
    getAll,
    getOneMassage,
    updateMassage,
}