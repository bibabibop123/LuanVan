const express = require('express');
const router = express.Router();
const detailcancelController = require('../app/controllers/DetailCancelController');

// router.get('/', (req,res)=>{
//     res.render('admin/detail-order',{layout:'admin'});
// })
// router.get("/cancel/:id",detailorderController.CancelOrder);
router.get('/:id', detailcancelController.DetailCancel);

module.exports = router;