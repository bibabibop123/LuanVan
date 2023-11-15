const express = require('express');
const router = express.Router();
const adminProductController = require('../../app/controllers/Admin/AdminProductController');
const { adminAuthentication } = require('../../common/authen');

router.get('/', adminAuthentication,  adminProductController.product);
router.post('/:id', adminAuthentication, adminProductController.updateCourse);
router.get('/product/detail/:id', adminAuthentication, adminProductController.detailCourses);
router.get('/product/delete/:id', adminAuthentication, adminProductController.deleteCourses);

module.exports = router;