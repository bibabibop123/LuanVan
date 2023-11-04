const express = require('express');
const router = express.Router();

const AdminDetailComfirmShipperController = require('../../app/controllers/Shipper/AdminDetailComfirmShipperController');
const { shipperAuthentication } = require('../../common/authen');

router.get("/confirm/:id",AdminDetailComfirmShipperController.adminAcceptOrder);
router.post("/confirm/:id",AdminDetailComfirmShipperController.adminAcceptOrder);
router.get('/:id',shipperAuthentication, AdminDetailComfirmShipperController.adminDetailComfirmShipper)
module.exports = router;