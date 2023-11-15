const express = require('express');
const router = express.Router();

const adminStaffController = require('../../app/controllers/Admin/AdminStaffController');
const { adminAuthentication } = require('../../common/authen');

router.get('/', adminAuthentication,  adminStaffController.adminStaff);
router.post('/:id', adminAuthentication, adminStaffController.updateStaff);
router.get('/staff/detail/:id', adminAuthentication, adminStaffController.detailStaff);
router.get('/staff/delete/:id', adminAuthentication, adminStaffController.deleteStaff);
module.exports = router;