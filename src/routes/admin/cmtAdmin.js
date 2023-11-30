const express = require('express');
const router = express.Router();

const adminCmtController = require('../../app/controllers/Admin/AdminCmtController');
const { adminAuthentication } = require('../../common/authen');

// router.get('/', (req,res)=>{
//     res.render('admin/order',{layout:'admin'});
// })

router.get('/', adminAuthentication, adminCmtController.adminCmt);
router.get('/cmt/delete/:id', adminAuthentication, adminCmtController.deleteCmt);
module.exports = router;