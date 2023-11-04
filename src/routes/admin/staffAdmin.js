const express = require('express');
const router = express.Router();

const adminStaffController = require('../../app/controllers/Admin/AdminStaffController');


router.get('/', adminStaffController.adminStaff);
router.post('/:id',adminStaffController.updateStaff);
router.get('/staff/detail/:id',adminStaffController.detailStaff);
router.get('/staff/delete/:id',adminStaffController.deleteStaff);
module.exports = router;