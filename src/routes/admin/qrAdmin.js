const express = require('express');
const router = express.Router();

const adminQrController = require('../../app/controllers/Admin/AdminqrController');
const { adminAuthentication } = require('../../common/authen');

// router.get('/', (req,res)=>{
//     res.render('admin/order',{layout:'admin'});
// })

router.get('/', adminAuthentication, adminQrController.adminQr);
module.exports = router;