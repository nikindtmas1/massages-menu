const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const massagesController = require('../controllers/massagesController');
const facesController = require('../controllers/facesController');

router.use('/users', userController);
router.use('/massages', massagesController);
router.use('/faces', facesController);

module.exports = router;