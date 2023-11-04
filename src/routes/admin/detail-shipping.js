const express = require('express');
const router = express.Router();

const admindetailshippingController = require('../../app/controllers/Admin/AdminDetailShippingController');

// router.get('/', (req,res)=>{
//     res.render('admin/detail-order',{layout:'admin'});
// })
router.get("/confirm/:id",admindetailshippingController.adminAcceptOrder);
// router.get("/cancel/:id",admindetailshippingController.adminCancelOrder);
router.get('/:id', admindetailshippingController.adminDetailShipping);

module.exports = router;