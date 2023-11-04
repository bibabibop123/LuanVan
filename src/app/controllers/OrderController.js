const Course = require('../models/Course');
const Order = require('./../models/Order');
class OrderController {
    async order ( req, res, next) {
        const orders = await Order.find({user:req.user._id}).sort({ createdAt: -1 }).lean();

        // console.log('Number of products', productsArray);
        return res.render('order',{orders});
    }
}

module.exports = new OrderController;