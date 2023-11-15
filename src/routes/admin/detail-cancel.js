const express = require('express');
const router = express.Router();

const admindetailcancelController = require('../../app/controllers/Admin/AdminDetailCancelController');
const { adminAuthentication } = require('../../common/authen');

// router.get('/', (req,res)=>{
//     res.render('admin/detail-order',{layout:'admin'});
// })
router.get("/confirm/:id", adminAuthentication, admindetailcancelController.adminAcceptOrder);
router.get("/cancel/:id", adminAuthentication, admindetailcancelController.adminCancelOrder);
router.get('/:id', adminAuthentication,  admindetailcancelController.adminDetailCancel);

module.exports = router;