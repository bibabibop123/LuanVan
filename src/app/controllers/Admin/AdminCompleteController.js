const Course = require('../../models/Course');
const { PaymentStatus } = require('../../../config/enum.config');
const Order = require('../../models/Order');
const moment = require('moment');

class AdminCompleteController {
    async adminComplete ( req, res, next) {

        const {keyword, startDay, endDay} = req.query;
        const query = {status:PaymentStatus.hoan_thanh};
        if (keyword) {
            query['name']= {$regex: keyword, $options: 'i'}
        }

        if (startDay || endDay) {
            const dateQuery = {};
            
            if (startDay) {
              dateQuery.$gte = moment(startDay, 'YYYY-MM-DD').toDate();
            }
          
            if (endDay) {
              dateQuery.$lte = moment(endDay, 'YYYY-MM-DD').add(1, 'days').toDate();
            }
          
            query['createdAt'] = dateQuery;
        }

        const orders = await Order.find(query).sort({ createdAt: -1 }).lean();
        return res.render('admin/order-complete',{orders,layout:'admin'});
    }
}

module.exports = new AdminCompleteController;