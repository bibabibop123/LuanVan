const express = require('express');
const router = express.Router();
const adminProductsSoldController = require('../../app/controllers/Admin/AdminProductsSoldController');

router.get('/', adminProductsSoldController.productsSold);
router.get('/product/detail/:id',adminProductsSoldController.detailCourses);


module.exports = router;