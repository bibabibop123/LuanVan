const { PaymentStatus } = require('../../config/enum.config');
const Course = require('../models/Course');
const Order = require('../models/Order');



class AdminOrderController {
    async adminOrder ( req, res, next) {
        // console.log(res.body)
        // const orders = await Order.find().lean();
        const orders = await Order.find({status: {$nin:[PaymentStatus.da_huy,PaymentStatus.xac_nhan]}}).lean();
        // console.log('order',orders);
        return res.render('admin/order',{layout:'admin', orders:orders});
    }
}

module.exports = new AdminOrderController;