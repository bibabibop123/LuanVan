const express = require('express');
const router = express.Router();

const admincreateController = require('../../app/controllers/Admin/AdminCreateController');

router.get('/', admincreateController.adminCreate );

router.post('/', admincreateController.adminPost)

module.exports = router;