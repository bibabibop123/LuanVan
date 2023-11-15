const express = require('express');
const router = express.Router();
const adminProfitDayController = require('../../app/controllers/Admin/AdminProfitDayController');
const { adminAuthentication } = require('../../common/authen');

router.get('/', adminAuthentication, adminProfitDayController.profitDay);
// router.get('/product/detail/:id',adminProductsSoldController.detailCourses);


module.exports = router;