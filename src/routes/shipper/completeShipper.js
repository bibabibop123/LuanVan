const express = require('express');
const router = express.Router();

const AdminCompleteShipperController = require('../../app/controllers/Shipper/AdminCompleteShipperController');
const { shipperAuthentication } = require('../../common/authen');

router.get('/',shipperAuthentication, AdminCompleteShipperController.adminCompleteShipper)
module.exports = router;