const express = require('express');
const router = express.Router();
const detailshippingController = require('../app/controllers/DetailShippingController');

// router.get('/', (req,res)=>{
//     res.render('admin/detail-order',{layout:'admin'});
// })
// router.get("/cancel/:id",detailorderController.CancelOrder);
router.get('/:id', detailshippingController.DetailShipping);

module.exports = router;