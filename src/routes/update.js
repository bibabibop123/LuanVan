const express = require('express');
const router = express.Router();


const updateController = require('../app/controllers/UpdateController');

router.get('/', updateController.update);

module.exports = router;