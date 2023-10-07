const express = require('express');
const AdminCompleteController = require('../../app/controllers/AdminCompleteController');
const router = express.Router();

router.get('/', AdminCompleteController.adminComplete);
module.exports = router;