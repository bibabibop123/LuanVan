const express = require('express');
const router = express.Router();

const adminCommentController = require('../../app/controllers/Admin/AdminCommentController');
const { adminAuthentication } = require('../../common/authen');

// router.get('/', (req,res)=>{
//     res.render('admin/order',{layout:'admin'});
// })

router.get('/', adminAuthentication, adminCommentController.adminComment);
module.exports = router;