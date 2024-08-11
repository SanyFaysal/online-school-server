const express = require('express');
const { registerUser, loginUser, getAllUser, getUserByEmail, getMe } = require('./user.controller');
const { verifyToken } = require('../../middlewares/verifyToken');
const router = express.Router();

router.post('/signup', registerUser)
router.post('/login', loginUser)

router.get('/', getAllUser)
router.get('/me', verifyToken, getMe)


module.exports = router; 