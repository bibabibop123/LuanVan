const express = require('express');
const router = express.Router();

const admindetailcancelController = require('./../../app/controllers/AdminDetailCancelController');

// router.get('/', (req,res)=>{
//     res.render('admin/detail-order',{layout:'admin'});
// })
router.get("/confirm/:id",admindetailcancelController.adminAcceptOrder);
router.get("/cancel/:id",admindetailcancelController.adminCancelOrder);
router.get('/:id', admindetailcancelController.adminDetailCancel);

module.exports = router;