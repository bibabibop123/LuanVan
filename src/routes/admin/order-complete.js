const express = require('express');
const AdminCompleteController = require('../../app/controllers/Admin/AdminCompleteController');
const { adminAuthentication } = require('../../common/authen');
const router = express.Router();

router.get('/', adminAuthentication, AdminCompleteController.adminComplete);
module.exports = router;