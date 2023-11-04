const express = require('express');
const AdminCancelController = require('../../app/controllers/Admin/AdminCancelController');
const router = express.Router();

router.get('/', AdminCancelController.adminCancel)
module.exports = router;