const express = require('express');
const router = express.Router();

const service = require('../services/waxingService');

router.get('/', async (req, res) => {

    const waxings = await service.getAllWaxing();
    res.json(waxings)
});

router.get('/:id', async (req, res) => {

    let result = await service.getOneWax(req.params.id);
    res.json(result);
 });

 router.put('/:id', async (req, res) => {
  
    await service.updateWax(req.params.id, req.body);

    res.json({ok: true});
});

module.exports = router;