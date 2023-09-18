const express = require('express');
const router = express.Router();


const searchController = require('../app/controllers/SearchController');

router.get('/', searchController.search);
router.get('/any-thing', searchController.voiceSearch);

module.exports = router;