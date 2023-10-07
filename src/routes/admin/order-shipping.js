const express = require('express');
const AdminShippingController = require('../../app/controllers/AdminShippingController');
const router = express.Router();

router.get('/', AdminShippingController.adminShipping);
module.exports = router;