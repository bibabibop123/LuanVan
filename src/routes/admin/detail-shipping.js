const express = require('express');
const router = express.Router();

const admindetailshippingController = require('../../app/controllers/Admin/AdminDetailShippingController');
const { adminAuthentication } = require('../../common/authen');

// router.get('/', (req,res)=>{
//     res.render('admin/detail-order',{layout:'admin'});
// })
router.get("/confirm/:id", adminAuthentication, admindetailshippingController.adminAcceptOrder);
// router.get("/cancel/:id",admindetailshippingController.adminCancelOrder);
router.get('/:id', adminAuthentication,  admindetailshippingController.adminDetailShipping);

module.exports = router;