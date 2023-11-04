const express = require('express');
const router = express.Router();

const admincreatestaffController = require('../../app/controllers/Admin/AdminCreateStaffController');

router.get('/', admincreatestaffController.adminCreateStaff );

router.post('/', admincreatestaffController.adminPost)

module.exports = router;