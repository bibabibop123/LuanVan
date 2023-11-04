const express = require('express');
const router = express.Router();
const adminLikeController = require('../../app/controllers/Admin/AdminLikeController');

router.get('/', adminLikeController.productLike);
// router.post('/:id',adminProductController.updateCourse);
// router.get('/product/detail/:id',adminProductController.detailCourses);
// router.get('/product/delete/:id',adminProductController.deleteCourses);

module.exports = router;