const express = require('express');
const router = express.Router();
const adminProductsSoldController = require('../../app/controllers/Admin/AdminProductsSoldController');
const { adminAuthentication } = require('../../common/authen');

router.get('/', adminAuthentication,  adminProductsSoldController.productsSold);
router.get('/product/detail/:id', adminAuthentication, adminProductsSoldController.detailCourses);


module.exports = router;