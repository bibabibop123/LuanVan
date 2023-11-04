const express = require('express');
const router = express.Router();
const detailcompleteController = require('../app/controllers/DetailCompleteController');

// router.get('/', (req,res)=>{
//     res.render('admin/detail-order',{layout:'admin'});
// })
// router.get("/cancel/:id",detailorderController.CancelOrder);
router.post('/evaluate/:id', detailcompleteController.evaluate)
router.get('/:id', detailcompleteController.DetailComplete);

module.exports = router;