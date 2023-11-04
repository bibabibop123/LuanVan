const express = require('express');
const router = express.Router();

const adminQrController = require('../../app/controllers/Admin/AdminqrController');

// router.get('/', (req,res)=>{
//     res.render('admin/order',{layout:'admin'});
// })

router.get('/', adminQrController.adminQr);
module.exports = router;