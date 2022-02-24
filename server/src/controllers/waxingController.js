const express = require('express');
const router = express.Router();

const service = require('../services/waxingService');

router.get('/', async (req, res) => {

    const waxings = await service.getAllWaxing();
    res.json(waxings)
});

module.exports = router;