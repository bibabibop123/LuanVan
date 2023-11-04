const Course = require('../../models/Course');
const { PaymentStatus } = require('../../../config/enum.config');
const Order = require('../../models/Order');
class AdminComfirmController {
    async adminComfirm ( req, res, next) {
        const {keyword} = req.query;
        const query = {status:PaymentStatus.xac_nhan};
        if (keyword) {
            query['name']= {$regex: keyword, $options: 'i'}
            
        }
        const orders = await Order.find(query).sort({ createdAt: -1 }).lean();
        return res.render('admin/order-comfirm',{orders,layout:'admin'});
    }
}

module.exports = new AdminComfirmController;