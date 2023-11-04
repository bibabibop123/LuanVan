const express = require('express');
const router = express.Router();

const admindetailorderController = require('../../app/controllers/Admin/AdminDetailOrderController');

// router.get('/', (req,res)=>{
//     res.render('admin/detail-order',{layout:'admin'});
// })
router.get("/confirm/:id",admindetailorderController.adminAcceptOrder);
router.get("/cancel/:id",admindetailorderController.adminCancelOrder);
router.get('/:id', admindetailorderController.adminDetailOrder);

module.exports = router;