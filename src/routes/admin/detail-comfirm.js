const express = require('express');
const router = express.Router();

const admindetailcomfirmController = require('../../app/controllers/Admin/AdminDetailComfirmController');

// router.get('/', (req,res)=>{
//     res.render('admin/detail-order',{layout:'admin'});
// })
router.get("/confirm/:id",admindetailcomfirmController.adminAcceptOrder);
router.post("/confirm/:id",admindetailcomfirmController.adminAcceptOrder);
router.get("/cancel/:id",admindetailcomfirmController.adminCancelOrder);
router.get('/:id', admindetailcomfirmController.adminDetailComfirm);

module.exports = router;