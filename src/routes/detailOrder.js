const express = require('express');
const router = express.Router();
const detailorderController = require('../app/controllers/DetailOrderController');

// router.get('/', (req,res)=>{
//     res.render('admin/detail-order',{layout:'admin'});
// })
router.get("/cancel/:id",detailorderController.CancelOrder);
router.get('/:id', detailorderController.DetailOrder);

module.exports = router;