const express = require('express');
const router = express.Router();


const confirmPasswordController = require('../app/controllers/ConfirmPassController');

router.get('/', confirmPasswordController.confirmPassword);
router.post('/', confirmPasswordController.createNewPass);

module.exports = router;