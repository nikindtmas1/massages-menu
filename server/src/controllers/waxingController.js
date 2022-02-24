const express = require('express');
const router = express.Router();

const service = require('../services/waxingService');

router.get('/', async (req, res) => {

    const waxing = await service.getAllWaxing();
    res.json(waxing)
});

module.exports = router;