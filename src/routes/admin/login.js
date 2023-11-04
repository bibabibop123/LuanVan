const express = require('express');
const router = express.Router();


const adminloginController = require('../../app/controllers/Admin/AdminLoginController');

router.get('/', adminloginController.login);
router.post('/',adminloginController.loginAction);
module.exports = router;