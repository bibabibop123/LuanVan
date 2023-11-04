const Course = require('../../models/Course');
const { PaymentStatus } = require('../../../config/enum.config');
const Order = require('../../models/Order');

class AdminCompleteController {
    async adminComplete ( req, res, next) {

        const {keyword} = req.query;
        const query = {status:PaymentStatus.hoan_thanh};
        if (keyword) {
            query['name']= {$regex: keyword, $options: 'i'}
        }

        const orders = await Order.find(query).sort({ createdAt: -1 }).lean();
        return res.render('admin/order-complete',{orders,layout:'admin'});
    }
}

module.exports = new AdminCompleteController;