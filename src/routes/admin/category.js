const express = require('express');
const AdminCategoryController = require('../../app/controllers/AdminCategoryController');
const router = express.Router();

router.get('/', AdminCategoryController.adminCategory);

module.exports = router;