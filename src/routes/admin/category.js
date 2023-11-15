const express = require('express');
const AdminCategoryController = require('../../app/controllers/Admin/AdminCategoryController');
const { adminAuthentication } = require('../../common/authen');
const router = express.Router();

router.get('/', adminAuthentication, AdminCategoryController.adminCategory);

module.exports = router;