const Course = require('../../models/Course');
const Category = require('../../models/category');
const order = require('../../models/Order');
const moment = require('moment');
const { PaymentStatus } = require('../../../config/enum.config');

class AdminProfitDayController {
    async profitDay ( req, res, next) {

      const {keyword, startDay, endDay} = req.query;
      const query = {status: PaymentStatus.hoan_thanh};

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


      if (keyword) {
          query['name']= {$regex: keyword, $options: 'i'}
          
      }

      // console.log(req.query)

        const orders = await order.find(query).lean();

        // console.log(orders)
        orders.forEach(order => {
            if (order.createdAt) {
              const date = new Date(order.createdAt);
              const formattedDate = date.toLocaleDateString('vi-VN');
              order.createdAt = formattedDate;
            }
          });

        const calculatedOrders = [];

        for (const order of orders) {
        const result = order.total - order.totalImport;
        calculatedOrders.push({ ...order, difference: result });
        }

        calculatedOrders.forEach(order => {
            order.total = order.total.toLocaleString('vi-VN'); // Định dạng số trong trường total
            order.totalImport = order.totalImport.toLocaleString('vi-VN'); // Định dạng số trong trường totalImport
            order.difference = order.difference.toLocaleString('vi-VN'); // Định dạng số trong trường difference
        });

        return res.render('admin/profitDay', {layout:'admin',orders:orders, calculatedOrders:calculatedOrders});
    }

}

module.exports = new AdminProfitDayController;