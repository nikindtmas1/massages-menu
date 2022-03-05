const express = require('express');
const router = express.Router();

const service = require('../services/faceService');

router.get('/', async (req, res) => {

    const faces = await service.getAllFaces();
    res.json(faces)
});

router.get('/:id', async (req, res) => {

    let result = await service.getOneFace(req.params.id);
    res.json(result);
 });

 router.put('/:id', async (req, res) => {
  
    await service.updateFace(req.params.id, req.body);

    res.json({ok: true});
});

module.exports = router;