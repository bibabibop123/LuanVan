const express = require('express');
const router = express.Router();

const adminPaypalController = require('../../app/controllers/Admin/AdminPaypalController');
const { adminAuthentication } = require('../../common/authen');

// router.get('/', (req,res)=>{
//     res.render('admin/order',{layout:'admin'});
// })

router.get('/', adminAuthentication, adminPaypalController.adminPaypal);
module.exports = router;