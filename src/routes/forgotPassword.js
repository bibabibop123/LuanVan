const express = require('express');
const router = express.Router();


const forgotPasswordController = require('../app/controllers/ForgotPasswordController');

router.get('/', forgotPasswordController.forgotPassword);
router.post('/',forgotPasswordController.confirmEmail);


module.exports = router;