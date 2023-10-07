const express = require('express');
const router = express.Router();


const femaleController = require('../app/controllers/FemaleController');
const FemaleController = require('../app/controllers/FemaleController');

router.use('/', femaleController.female)
router.get('/list', FemaleController.listFeCourse);
module.exports = router;