const { PaymentStatus } = require('../../../config/enum.config');
const Course = require('../../models/Course');
const Order = require('../../models/Order');



class AdminOrderController {
    async adminOrder ( req, res, next) {
        // console.log(res.body)
        // const orders = await Order.find().lean();
        const {keyword} = req.query;
        const query = {status: PaymentStatus.da_dat_hang};
        if (keyword) {
            query['name']= {$regex: keyword, $options: 'i'}
            
        }
        // console.log(req.query);
        const orders = await Order.find(query).sort({ createdAt: -1 }).lean();

        
        return res.render('admin/order',{layout:'admin', orders:orders});
    }
}

module.exports = new AdminOrderController;