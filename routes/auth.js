const express = require('express');
const { register, login, getLoggedInUser, forgotPassword, resetPassword } = require('../controllers/auth');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/loggedInUser', protect, getLoggedInUser)
router.post('/forgotPassword', forgotPassword);
router.put('/resetPassword/:resetToken', resetPassword);

module.exports = router;