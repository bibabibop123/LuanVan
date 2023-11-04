const express = require('express');
const router = express.Router();
const adminHomeController = require('../../app/controllers/Admin/AdminHomeController');
const { adminAuthentication } = require('../../common/authen');

router.get('/', adminAuthentication, adminHomeController.home);
// router.get('/product/detail/:id',adminHomeController.detailCourses);
// router.post('/:id',adminHomeController.updateCourse);
// router.get('/product/delete/:id',adminHomeController.deleteCourses);

module.exports = router;