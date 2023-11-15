const express = require('express');
const router = express.Router();

const admindetailcomfirmController = require('../../app/controllers/Admin/AdminDetailComfirmController');
const { adminAuthentication } = require('../../common/authen');

// router.get('/', (req,res)=>{
//     res.render('admin/detail-order',{layout:'admin'});
// })
router.get("/confirm/:id", adminAuthentication, admindetailcomfirmController.adminAcceptOrder);
router.post("/confirm/:id", adminAuthentication, admindetailcomfirmController.adminAcceptOrder);
router.get("/cancel/:id", adminAuthentication, admindetailcomfirmController.adminCancelOrder);
router.get('/:id', adminAuthentication, admindetailcomfirmController.adminDetailComfirm);

module.exports = router;