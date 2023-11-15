const express = require('express');
const router = express.Router();

const admincreatecategoryController = require('../../app/controllers/Admin/AdminCreateCategoryController');
const { adminAuthentication } = require('../../common/authen');

router.get('/', adminAuthentication,  admincreatecategoryController.adminCreateCategory );

router.post('/', admincreatecategoryController.adminPost)

module.exports = router;