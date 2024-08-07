const express = require('express');
const { registerUser, loginUser, getAllUser } = require('./user.controller');
const router = express.Router();

router.post('/signup', registerUser)
router.post('/login', loginUser)
router.get('/', getAllUser)


module.exports = router; 