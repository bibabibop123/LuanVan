const express = require('express');
const router = express.Router();

const adminPaypalController = require('../../app/controllers/Admin/AdminPaypalController');

// router.get('/', (req,res)=>{
//     res.render('admin/order',{layout:'admin'});
// })

router.get('/', adminPaypalController.adminPaypal);
module.exports = router;