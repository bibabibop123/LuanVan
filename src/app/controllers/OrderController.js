const Course = require('../models/Course');
const Order = require('./../models/Order');
class OrderController {
    async order ( req, res, next) {
        const orders = await Order.find({user:req.user._id}).lean();
        return res.render('order',{orders});
    }
}

module.exports = new OrderController;