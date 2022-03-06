const BodyTherapies = require('../models/boduTherapyModel');

const getAllBodyTherapies = () => BodyTherapies.find();

const getOneBodyTherapy = (id) => BodyTherapies.findById(id);

const updateBodyTherapy = (id, dataTherapy) => BodyTherapies.findByIdAndUpdate(id, dataTherapy);


module.exports = {
    getAllBodyTherapies,
    getOneBodyTherapy,
    updateBodyTherapy,
}