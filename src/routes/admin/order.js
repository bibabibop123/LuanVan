const express = require('express');
const router = express.Router();

const adminorderController = require('./../../app/controllers/AdminOrderController');

// router.get('/', (req,res)=>{
//     res.render('admin/order',{layout:'admin'});
// })

router.get('/', adminorderController.adminOrder);
module.exports = router;