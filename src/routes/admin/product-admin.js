const express = require('express');
const router = express.Router();
const adminProductController = require('../../app/controllers/Admin/AdminProductController');

router.get('/', adminProductController.product);
router.post('/:id',adminProductController.updateCourse);
router.get('/product/detail/:id',adminProductController.detailCourses);
router.get('/product/delete/:id',adminProductController.deleteCourses);

module.exports = router;