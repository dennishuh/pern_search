const express = require('express');
const { getUsers } = require('../controllers/usersController');

const router = express.Router();

router.route('/').get(getUsers);

// router.route('/register').post(apiLimiter, register);

module.exports = router;
