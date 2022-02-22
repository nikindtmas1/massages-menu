const Faces = require('../models/faceModel');

const getAllFaces = () => Faces.find();

module.exports = {
    getAllFaces,
    
}