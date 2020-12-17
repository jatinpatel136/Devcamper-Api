const express = require('express');
const { register, login, getLoggedInUser, forgotPassword, resetPassword, updateDetails, updatePassword } = require('../controllers/auth');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/loggedInUser', protect, getLoggedInUser);
router.put('/updateDetails', protect, updateDetails);
router.put('/updatePassword', protect, updatePassword)
router.post('/forgotPassword', forgotPassword);
router.put('/resetPassword/:resetToken', resetPassword);

module.exports = router;