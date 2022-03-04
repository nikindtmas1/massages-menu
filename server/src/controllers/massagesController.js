const express = require('express');
const router = express.Router();
const services = require('../services/massageService');

router.get('/', async (req, res) => {

    const massages = await services.getAll();
    res.json(massages)
});

router.get('/:id', async (req, res) => {

    let result = await services.getOneMassage(req.params.id);
    res.json(result);
 });

 router.put('/:id', async (req, res) => {
  
    await services.updateMassage(req.params.id, req.body);

    res.json({ok: true});
});

module.exports = router;