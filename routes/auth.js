const express = require('express');
const { register, login, getLoggedInUser, forgotPassword } = require('../controllers/auth');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/loggedInUser', protect, getLoggedInUser)
router.post('/forgotPassword', forgotPassword);

module.exports = router;