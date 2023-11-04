const express = require('express');
const router = express.Router();
const detailcomfirmController = require('../app/controllers/DetailComfirmController');

// router.get('/', (req,res)=>{
//     res.render('admin/detail-order',{layout:'admin'});
// })
// router.get("/cancel/:id",detailorderController.CancelOrder);
router.get('/:id', detailcomfirmController.DetailComfirm);

module.exports = router;