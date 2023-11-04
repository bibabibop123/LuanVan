const express = require('express');
const router = express.Router();

const loginShipperRouter = require('./loginShipper');
const shipperAdminRouter = require('./shipperAdmin');
const comfirmShipperAdminRouter = require('./comfirmShipper');
const completeShipperAdminRouter = require('./completeShipper');
const cancelShipperAdminRouter = require('./cancelShipper');
const detailShipperAdminRouter = require('./detailShipper');
const detailCancelShipperAdminRouter = require('./detailCancelShipper');
const detailComfirmShipperAdminRouter = require('./detailComfirmShipper');
const detailCompleteShipperAdminRouter = require('./detailCompleteShipper');


router.use('/login',loginShipperRouter);
router.use('/shipperAdmin',shipperAdminRouter);
router.use('/comfirmShipper',comfirmShipperAdminRouter);
router.use('/completeShipper',completeShipperAdminRouter);
router.use('/cancelShipper',cancelShipperAdminRouter);
router.use('/detailShipper',detailShipperAdminRouter);
router.use('/detailCancelShipper',detailCancelShipperAdminRouter);
router.use('/detailComfirmShipper',detailComfirmShipperAdminRouter);
router.use('/detailCompleteShipper',detailCompleteShipperAdminRouter);
module.exports = router;