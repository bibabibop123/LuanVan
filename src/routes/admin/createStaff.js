const express = require('express');
const router = express.Router();

const admincreatestaffController = require('../../app/controllers/Admin/AdminCreateStaffController');
const { adminAuthentication } = require('../../common/authen');

router.get('/', adminAuthentication,  admincreatestaffController.adminCreateStaff );

router.post('/', admincreatestaffController.adminPost)

module.exports = router;