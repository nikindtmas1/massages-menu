const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const menuController = require('../controllers/menuController');

router.use('/user', userController);
router.use('/menu', menuController);

module.exports = router;