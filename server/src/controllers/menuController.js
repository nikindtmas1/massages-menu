const express = require('express');
const { route } = require('./userController');
const router = express.Router();

router.get('/', (req, res) => {

    res.send('Hello Niki!!!')
});

module.exports = router;