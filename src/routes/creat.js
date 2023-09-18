const express = require('express');
const router = express.Router();


const creatController = require('../app/controllers/CreatController');

router.get('/', creatController.creat)
router.post('/store', creatController.store)

module.exports = router;