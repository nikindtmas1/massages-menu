const express = require('express');
const router = express.Router();

const services = require('../services/bodyTherapyService');

router.get('/', async (req, res) => {

    const bodyTherapies = await services.getAllBodyTherapies();
    console.log(bodyTherapies);
    res.json(bodyTherapies);
});

router.get('/:id', async (req, res) => {

    const result = await services.getOneBodyTherapy(req.params.id);
    res.json(result);
});

router.put('/:id', async (req, res) => {

    await services.updateBodyTherapy(req.params.id, req.body);
    res.json({ok: true});
});

module.exports = router;