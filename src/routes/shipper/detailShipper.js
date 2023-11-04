const express = require('express');
const router = express.Router();

const admindetailshipperController = require('../../app/controllers/Shipper/AdminDetailShipperController');

// router.get('/', (req,res)=>{
//     res.render('admin/detail-order',{layout:'admin'});
// })
router.get("/confirm/:id",admindetailshipperController.adminAcceptOrder);
router.get("/cancel/:id",admindetailshipperController.adminCancelOrder);
router.get('/:id', admindetailshipperController.adminDetailShipper);

module.exports = router;