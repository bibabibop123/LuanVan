const express = require('express');
const router = express.Router();

const admindetailcompleteController = require('../../app/controllers/Admin/AdminDetailCompleteController');

// router.get('/', (req,res)=>{
//     res.render('admin/detail-order',{layout:'admin'});
// })
router.get("/confirm/:id",admindetailcompleteController.adminAcceptOrder);
router.get("/cancel/:id",admindetailcompleteController.adminCancelOrder);
router.get('/:id', admindetailcompleteController.adminDetailComplete);

module.exports = router;