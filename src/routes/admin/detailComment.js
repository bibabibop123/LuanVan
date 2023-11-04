const express = require('express');
const router = express.Router();

const admindetailcommentController = require('../../app/controllers/Admin/AdminDetailCommentController');

// router.get('/', (req,res)=>{
//     res.render('admin/detail-order',{layout:'admin'});
// })
// router.get("/confirm/:id",admindetailcompleteController.adminAcceptOrder);
// router.get("/cancel/:id",admindetailcompleteController.adminCancelOrder);
router.post('/feedback/:id', admindetailcommentController.adminFeedback)
router.get('/:id', admindetailcommentController.adminDetailComment);

module.exports = router;