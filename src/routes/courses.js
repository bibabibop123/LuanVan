const express = require('express');
const router = express.Router();


const coursesController = require('../app/controllers/CoursesController');

router.get('/', coursesController.male);
router.get('/list',coursesController.listCourse);
// router.get('/detail/:id',coursesController.detailCourses);
// router.put('/update/:id',coursesController.updateCourse);
// router.delete('/delete/:id',coursesController.deleteCourse);
module.exports = router;