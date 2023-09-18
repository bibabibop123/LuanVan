const express = require('express');
const router = express.Router();


const femaleController = require('../app/controllers/FemaleController');

router.use('/', femaleController.female)
module.exports = router;