const express = require('express');
const router = express.Router();


const coupleController = require('../app/controllers/CoupleController');

router.use('/', coupleController.couple)
module.exports = router;