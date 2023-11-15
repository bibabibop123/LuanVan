const express = require('express');
const router = express.Router();

const adminorderController = require('../../app/controllers/Admin/AdminOrderController');
const { adminAuthentication } = require('../../common/authen');

// router.get('/', (req,res)=>{
//     res.render('admin/order',{layout:'admin'});
// })

router.get('/', adminAuthentication, adminorderController.adminOrder);
module.exports = router;