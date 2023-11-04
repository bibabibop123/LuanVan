const express = require('express');
const router = express.Router();

const AdminComfirmShipperController = require('../../app/controllers/Shipper/AdminComfirmShipperController');
const { shipperAuthentication } = require('../../common/authen');

router.get('/',shipperAuthentication, AdminComfirmShipperController.adminComfirmShipper)
module.exports = router;