const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const massagesController = require('../controllers/massagesController');

router.use('/users', userController);
router.use('/massages', massagesController);

module.exports = router;