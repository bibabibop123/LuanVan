const express = require('express');
const router = express.Router();

const AdminDetailCompleteShipperController = require('../../app/controllers/Shipper/AdminDetailCompleteShipperController');
const { shipperAuthentication } = require('../../common/authen');

// router.get("/confirm/:id",AdminDetailComfirmShipperController.adminAcceptOrder);
// router.post("/confirm/:id",AdminDetailComfirmShipperController.adminAcceptOrder);
router.get('/:id',shipperAuthentication, AdminDetailCompleteShipperController.adminDetailCompleteShipper)
module.exports = router;