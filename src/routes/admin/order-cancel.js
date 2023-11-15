const express = require('express');
const AdminCancelController = require('../../app/controllers/Admin/AdminCancelController');
const { adminAuthentication } = require('../../common/authen');
const router = express.Router();

router.get('/', adminAuthentication,  AdminCancelController.adminCancel)
module.exports = router;