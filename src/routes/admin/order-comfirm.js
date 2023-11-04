const express = require('express');
const AdminComfirmController = require('../../app/controllers/Admin/AdminComfirmController');
const router = express.Router();

router.get('/', AdminComfirmController.adminComfirm);
module.exports = router;