const express = require('express');
const router = express.Router();


const addressuserController = require('../app/controllers/AddressUserController');

router.get('/', addressuserController.addressUser);
router.post('/', addressuserController.createAddress);

module.exports = router;