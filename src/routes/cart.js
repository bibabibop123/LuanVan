const express = require('express');
const router = express.Router();


const cartController = require('../app/controllers/CartController');

router.get('/', cartController.cart)
router.get('/add-cart/:id',cartController.addCart);
router.get('/remove-cart/:id',cartController.removeCart)
router.post('/increment/:id',cartController.incrementCart)
router.post('/decrement/:id',cartController.decrementCart)
module.exports = router;