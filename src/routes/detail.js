const express = require('express');
const router = express.Router();


const detailController = require('../app/controllers/DetailController');
router.post('/comment/:id', detailController.comment)
router.get('/:name', detailController.detail)

module.exports = router;