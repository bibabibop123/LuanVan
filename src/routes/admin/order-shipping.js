const express = require('express');
const AdminShippingController = require('../../app/controllers/Admin/AdminShippingController');
const { adminAuthentication } = require('../../common/authen');
const router = express.Router();

router.get('/', adminAuthentication, AdminShippingController.adminShipping);
module.exports = router;