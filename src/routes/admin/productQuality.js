const express = require('express');
const router = express.Router();
const adminProductQualityController = require('../../app/controllers/Admin/AdminProductQualityController');
const { adminAuthentication } = require('../../common/authen');

router.get('/', adminAuthentication,  adminProductQualityController.productQuality);
router.post('/:id', adminAuthentication, adminProductQualityController.updateCourse);
router.get('/detail/:id', adminAuthentication, adminProductQualityController.detailCourses);



module.exports = router;