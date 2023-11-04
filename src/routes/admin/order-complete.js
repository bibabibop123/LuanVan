const express = require('express');
const AdminCompleteController = require('../../app/controllers/Admin/AdminCompleteController');
const router = express.Router();

router.get('/', AdminCompleteController.adminComplete);
module.exports = router;