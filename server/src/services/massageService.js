const Massages = require('../models/massagesModel');

const getAll = () => Massages.find();

module.exports = {
    getAll,
    
}