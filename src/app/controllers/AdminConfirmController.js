const Course = require('../models/Course');
const { PaymentStatus } = require('../../config/enum.config');
const Order = require('../models/Order');
class AdminConfirmController {
    async adminConfirm ( req, res, next) {
        const orders = await Order.find({status:PaymentStatus.xac_nhan}).lean();
        return res.render('admin/order-confirm',{orders,layout:'admin'});
    }
}

module.exports = new AdminConfirmController;