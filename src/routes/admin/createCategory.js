const express = require('express');
const router = express.Router();

const admincreatecategoryController = require('../../app/controllers/Admin/AdminCreateCategoryController');

router.get('/', admincreatecategoryController.adminCreateCategory );

router.post('/', admincreatecategoryController.adminPost)

module.exports = router;