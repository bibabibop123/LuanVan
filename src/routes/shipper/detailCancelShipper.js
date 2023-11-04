const express = require('express');
const router = express.Router();

const AdminDetailCancelShipperController = require('../../app/controllers/Shipper/AdminDetailCancelShipperController');
const { shipperAuthentication } = require('../../common/authen');

router.get('/:id',shipperAuthentication, AdminDetailCancelShipperController.adminDetailCancelShipper)
module.exports = router;