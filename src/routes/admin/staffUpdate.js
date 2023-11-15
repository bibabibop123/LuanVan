const express = require('express');
const router = express.Router();

const adminStaffUpdateController = require('../../app/controllers/Admin/AdminStaffUpdateController');
const { adminAuthentication } = require('../../common/authen');

// router.get('/', (req,res)=>{
//     res.render('admin/order',{layout:'admin'});
// })

router.get('/', adminAuthentication, adminStaffUpdateController.adminStaffUpdate);
// router.get('/staff/delete/:id',adminStaffController.deleteStaff);
module.exports = router;