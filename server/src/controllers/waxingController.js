const express = require('express');
const router = express.Router();

const service = require('../services/waxingService');

router.get('/', async (req, res) => {

    const waxings = await service.getAllWaxing();
    res.json(waxings)
});

router.get('/:id', async (req, res) => {

    let result = await service.getOne(req.params.id);
 
    res.json(result);
 });

module.exports = router;