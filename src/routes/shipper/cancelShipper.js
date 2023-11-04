const express = require('express');
const router = express.Router();

const AdminCancelShipperController = require('../../app/controllers/Shipper/AdminCancelShipperController');
const { shipperAuthentication } = require('../../common/authen');

router.get('/',shipperAuthentication, AdminCancelShipperController.adminCancelShipper)
module.exports = router;