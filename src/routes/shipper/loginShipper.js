const express = require('express');
const router = express.Router();


const adminloginShipperController = require('../../app/controllers/Shipper/AdminLoginShipperController');

router.get('/', adminloginShipperController.loginShipper);
router.post('/',adminloginShipperController.loginAction);
module.exports = router;