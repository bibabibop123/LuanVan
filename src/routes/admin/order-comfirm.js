const express = require('express');
const AdminComfirmController = require('../../app/controllers/Admin/AdminComfirmController');
const { adminAuthentication } = require('../../common/authen');
const router = express.Router();

router.get('/', adminAuthentication,  AdminComfirmController.adminComfirm);
module.exports = router;