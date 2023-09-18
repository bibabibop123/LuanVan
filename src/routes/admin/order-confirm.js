const express = require('express');
const AdminConfirmController = require('../../app/controllers/AdminConfirmController');
const router = express.Router();

router.get('/', AdminConfirmController.adminConfirm);
module.exports = router;