const express = require('express');
const router = express.Router();

const adminCommentController = require('../../app/controllers/Admin/AdminCommentController');

// router.get('/', (req,res)=>{
//     res.render('admin/order',{layout:'admin'});
// })

router.get('/', adminCommentController.adminComment);
module.exports = router;