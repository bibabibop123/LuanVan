const express = require('express');
const router = express.Router();

const admindetailorderController = require('../../app/controllers/Admin/AdminDetailOrderController');
const { adminAuthentication } = require('../../common/authen');

// router.get('/', (req,res)=>{
//     res.render('admin/detail-order',{layout:'admin'});
// })
router.get("/confirm/:id", adminAuthentication, admindetailorderController.adminAcceptOrder);
router.get("/cancel/:id", adminAuthentication, admindetailorderController.adminCancelOrder);
router.get('/:id', adminAuthentication, admindetailorderController.adminDetailOrder);

module.exports = router;