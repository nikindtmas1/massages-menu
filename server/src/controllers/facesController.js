const express = require('express');
const router = express.Router();

const service = require('../services/faceService');

router.get('/', async (req, res) => {

    const faces = await service.getAllFaces();
    res.json(faces)
});

module.exports = router;