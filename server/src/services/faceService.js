const Faces = require('../models/faceModel');

const getAllFaces = () => Faces.find();

const getOneFace = (id) => Faces.findById(id);

const updateFace = (id, dataFace) => Faces.findByIdAndUpdate(id, dataFace);

module.exports = {
    getAllFaces,
    getOneFace,
    updateFace,
}