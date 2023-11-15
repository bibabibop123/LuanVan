const express = require('express');
const router = express.Router();

const admindetailcompleteController = require('../../app/controllers/Admin/AdminDetailCompleteController');
const { adminAuthentication } = require('../../common/authen');

// router.get('/', (req,res)=>{
//     res.render('admin/detail-order',{layout:'admin'});
// })
router.get("/confirm/:id", adminAuthentication, admindetailcompleteController.adminAcceptOrder);
router.get("/cancel/:id", adminAuthentication, admindetailcompleteController.adminCancelOrder);
router.get('/:id', adminAuthentication, admindetailcompleteController.adminDetailComplete);

module.exports = router;