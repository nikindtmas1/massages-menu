const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const menuController = require('../controllers/menuController');

router.use('/users', userController);
router.use('/menu', menuController);

module.exports = router;