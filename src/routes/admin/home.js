const express = require('express');
const router = express.Router();
const adminHomeController = require('./../../app/controllers/AdminHomeController');

router.get('/', adminHomeController.home);
router.get('/product/detail/:id',adminHomeController.detailCourses);
router.post('/:id',adminHomeController.updateCourse);
router.get('/product/delete/:id',adminHomeController.deleteCourses);

module.exports = router;