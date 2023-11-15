const express = require('express');
const router = express.Router();
const { adminAuthentication } = require('../../common/authen');
const admincreateController = require('../../app/controllers/Admin/AdminCreateController');

router.get('/', adminAuthentication,  admincreateController.adminCreate );

router.post('/', admincreateController.adminPost)

module.exports = router;