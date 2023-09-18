const express = require('express');
const AdminCancelController = require('../../app/controllers/AdminCancelController');
const router = express.Router();

router.get('/', AdminCancelController.adminCancel)
module.exports = router;