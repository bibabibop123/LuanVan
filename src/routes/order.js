const express = require('express');
const router = express.Router();


const orderController = require('../app/controllers/OrderController');
const { userAuthentication } = require('../common/authen');

router.get('/', userAuthentication, orderController.order);

module.exports = router;