const express = require('express');
const router = express.Router();
const services = require('../services/massageService');

router.get('/', async (req, res) => {

    const massages = await services.getAll();
    res.json(massages)
});

module.exports = router;