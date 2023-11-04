const express = require('express');
const router = express.Router();

const AdminShipperController = require('../../app/controllers/Shipper/AdminShipperController');
const { shipperAuthentication } = require('../../common/authen');

router.get('/',shipperAuthentication, AdminShipperController.adminShipper)
module.exports = router;