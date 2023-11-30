const Course = require('../../models/Course');
const Order = require('../../models/Order');
const cmt = require('../../models/comment');
const moment = require('moment');
const { PaymentStatus } = require('../../../config/enum.config');

class AdminHomeController {
    async home ( req, res, next) {
        const products = await Course.find().lean();
        const order = await Order.find({ paymentMethod: 'cod'}).lean();

        const comment = await cmt.find().limit(4).sort({ createdAt: -1 }).lean();
        console.log(comment);
        const orderOnline = await Order.find({
          $or: [
            { paymentMethod: 'paypal' },
            { paymentMethod: 'atm' }
          ]
        }).lean();

        let totalOnline = 0;
        for (const orderItem of orderOnline) {
          totalOnline += orderItem.total;
        }
        const totalOnlineFormat = totalOnline.toLocaleString('en-US');
        // console.log(totalOnline)


        const course = await Course.find().lean();
        const courseNumber = course.length;
        // console.log(courseNumber)
        const numberOfOrder = await Order.find({status:PaymentStatus.hoan_thanh}).lean();
        const numberOfOrders = numberOfOrder.length;
        let totalAmount = 0;

        for (const orderItem of order) {
          totalAmount += orderItem.total;
        }

        const totalAmountFormat = totalAmount.toLocaleString('en-US');


        // ĐƠN HÀNG THEO NGÀY
        const orderDay = await Order.find({ status: { $in: [PaymentStatus.xac_nhan,PaymentStatus.dang_van_chuyen, PaymentStatus.hoan_thanh] } }).lean();
        const today = new Date();
        let totalForToday = 0;
        
        orderDay.forEach(order => {
          if (order.createdAt) {
            const createdAtDate = new Date(order.createdAt);
        
            if (
              createdAtDate.getDate() === today.getDate() &&
              createdAtDate.getMonth() === today.getMonth() &&
              createdAtDate.getFullYear() === today.getFullYear()
            ) {
                totalForToday += order.total 
            }
          }
        });

        const totalForTodayFormat = totalForToday.toLocaleString('en-US');


        // const orderTotal = await Order.find({status:PaymentStatus.hoan_thanh}).lean();
        const orderTotal = await Order.find({ status: { $in: [PaymentStatus.xac_nhan, PaymentStatus.hoan_thanh] } }).lean();
        
        // ĐƠN HÀNG THEO THÁNG
        const currentDate = new Date(); 
        const startDate = new Date(today.getFullYear(), today.getMonth(), 1);
        const endDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);

        const totalInMonth = orderTotal.reduce((total, order) => {
        if (order.createdAt >= startDate && order.createdAt <= endDate) {
            return total += order.total 
        }
        return total;
        }, 0);

        const totalInMonthFormat = totalInMonth.toLocaleString('en-US');



        // ĐƠN HÀNG THEO NĂM
        const currentYear = currentDate.getFullYear();
        
        const totalForCurrentYear = orderDay
          .filter(order => {
            const orderDate = new Date(order.createdAt);
            return orderDate.getFullYear() === currentYear;
          })
          .reduce((acc, order) => acc + order.total, 0);

          const totalForCurrentYearFormat = totalForCurrentYear.toLocaleString('en-US');
        
        

        // TẤT CẢ ĐƠN HÀNG
        let totalSum = 0;
        orderTotal.forEach(order => {
          if (order.total) {
            totalSum += order.total;
          }
        });

        const totalSumFormat = totalSum.toLocaleString('en-US');



        
        // Từng năm
        const {year} = req.query;
        const query = {status: PaymentStatus.hoan_thanh};
        if (year) {
          // Assuming createdAt is a date field, and you want to filter by the entire year
          const startOfYear = moment(year, 'YYYY').startOf('year');
          const endOfYear = moment(year, 'YYYY').endOf('year');
        
          query['createdAt'] = {
            $gte: startOfYear.toDate(),
            $lte: endOfYear.toDate(),
          };
        }else {
          // Assuming createdAt is a date field, and you want to filter by the entire year
          const startOfYear = moment().startOf('year');
          const endOfYear = moment().endOf('year');
        
          query['createdAt'] = {
            $gte: startOfYear.toDate(),
            $lte: endOfYear.toDate(),
          };
        }
        // console.log(req.query)
        const orders = await Order.find(query).lean();
        // console.log('orders',orders)
  
        //tháng 1
        let totalOfMonth1 = 0;
        const ordersThisYearAndMonth1 = orders.filter(order => {
          const orderDate = new Date(order.createdAt);
          // console.log(orderDate)
          return orderDate.getMonth() === 0;
        });

        // console.log(ordersThisYearAndMonth1)
        for (const order of ordersThisYearAndMonth1) {
          totalOfMonth1 += order.total;
        }
        // console.log('Tổng total của tháng 1 trong năm nay:', totalOfMonth1);


        // Tháng 2
        let totalOfMonth2 = 0;
        const ordersThisYearAndMonth2 = orders.filter(order => {
          const orderDate = new Date(order.createdAt);
          return orderDate.getMonth() === 1;
        });

        for (const order of ordersThisYearAndMonth2) {
          totalOfMonth2 += order.total;
        }

        // console.log('Tổng total của tháng 2 trong năm nay:', totalOfMonth2);

        
        //tháng 3
        let totalOfMonth3 = 0;
        const ordersThisYearAndMonth3 = orders.filter(order => {
          const orderDate = new Date(order.createdAt);
          return  orderDate.getMonth() === 2;
        });

        for (const order of ordersThisYearAndMonth3) {
          totalOfMonth3 += order.total;
        }

        // console.log('Tổng total của tháng 3 trong năm nay:', totalOfMonth3);
        


        //tháng 4
        let totalOfMonth4 = 0;
        const ordersThisYearAndMonth4 = orders.filter(order => {
          const orderDate = new Date(order.createdAt);
          return orderDate.getMonth() === 3;
        });

        for (const order of ordersThisYearAndMonth4) {
          totalOfMonth4 += order.total;
        }

        // console.log('Tổng total của tháng 4 trong năm nay:', totalOfMonth4);


        //tháng 5
        let totalOfMonth5 = 0;
        const ordersThisYearAndMonth5 = orders.filter(order => {
          const orderDate = new Date(order.createdAt);
          return orderDate.getMonth() === 4;
        });

        for (const order of ordersThisYearAndMonth5) {
          totalOfMonth5 += order.total;
        }

        // console.log('Tổng total của tháng 5 trong năm nay:', totalOfMonth5);


        //tháng 6
        let totalOfMonth6 = 0;
        const ordersThisYearAndMonth6 = orders.filter(order => {
          const orderDate = new Date(order.createdAt);
          return orderDate.getMonth() === 5;
        });

        for (const order of ordersThisYearAndMonth6) {
          totalOfMonth6 += order.total;
        }

        // console.log('Tổng total của tháng 6 trong năm nay:', totalOfMonth6);



        //tháng 7
        let totalOfMonth7 = 0;
        const ordersThisYearAndMonth7 = orders.filter(order => {
          const orderDate = new Date(order.createdAt);
          return orderDate.getMonth() === 6;
        });

        for (const order of ordersThisYearAndMonth7) {
          totalOfMonth7 += order.total;
        }

        // console.log('Tổng total của tháng 7 trong năm nay:', totalOfMonth7);



        //tháng 8
        let totalOfMonth8 = 0;
        const ordersThisYearAndMonth8 = orders.filter(order => {
          const orderDate = new Date(order.createdAt);
          return orderDate.getMonth() === 7;
        });

        for (const order of ordersThisYearAndMonth8) {
          totalOfMonth8 += order.total;
        }

        // console.log('Tổng total của tháng 8 trong năm nay:', totalOfMonth8);



        //tháng 9
        let totalOfMonth9 = 0;
        const ordersThisYearAndMonth9 = orders.filter(order => {
          const orderDate = new Date(order.createdAt);
          return orderDate.getMonth() === 8;
        });

        for (const order of ordersThisYearAndMonth9) {
          totalOfMonth9 += order.total;
        }

        // console.log('Tổng total của tháng 9 trong năm nay:', totalOfMonth9);



        //tháng 10
        let totalOfMonth10 = 0;
        const ordersThisYearAndMonth10 = orders.filter(order => {
          const orderDate = new Date(order.createdAt);
          return orderDate.getMonth() === 9;
        });

        for (const order of ordersThisYearAndMonth10) {
          totalOfMonth10 += order.total;
        }

        // console.log('Tổng total của tháng 10 trong năm nay:', totalOfMonth10);



        //tháng 11
        let totalOfMonth11 = 0;
        const ordersThisYearAndMonth11 = orders.filter(order => {
          const orderDate = new Date(order.createdAt);
          return orderDate.getMonth() === 10;
        });

        for (const order of ordersThisYearAndMonth11) {
          totalOfMonth11 += order.total;
        }

        // console.log('Tổng total của tháng 11 trong năm nay:', totalOfMonth11);



        //tháng 12
        let totalOfMonth12 = 0;
        const ordersThisYearAndMonth12 = orders.filter(order => {
          const orderDate = new Date(order.createdAt);
          return orderDate.getMonth() === 11;
        });

        for (const order of ordersThisYearAndMonth12) {
          totalOfMonth12 += order.total;
        }


        // Thống kê đánh giá
        const orderEvaluate = await Order.find({ status: PaymentStatus.hoan_thanh }).lean();

        const ordersWithGoodEvaluation = orderEvaluate.filter(o => o.evaluate === 'Tốt');
        const ordersWithNotGoodEvaluation = orderEvaluate.filter(o => o.evaluate === 'Không tốt');

        const evaluateGood = ordersWithGoodEvaluation.length;
        const evaluateNotGood = ordersWithNotGoodEvaluation.length;
        
        return res.render('admin/home', {layout:'admin', totalSumFormat:totalSumFormat, totalForCurrentYearFormat:totalForCurrentYearFormat, totalInMonthFormat:totalInMonthFormat, totalForTodayFormat:totalForTodayFormat, products:products,courseNumber:courseNumber, totalAmountFormat:totalAmountFormat, numberOfOrders:numberOfOrders,
        totalOfMonth1:totalOfMonth1, totalOfMonth2:totalOfMonth2, totalOfMonth3:totalOfMonth3, totalOfMonth4:totalOfMonth4,
          totalOfMonth5:totalOfMonth5, totalOfMonth6:totalOfMonth6, totalOfMonth7:totalOfMonth7, totalOfMonth8:totalOfMonth8,
          totalOfMonth9:totalOfMonth9, totalOfMonth10:totalOfMonth10, totalOfMonth11:totalOfMonth11, totalOfMonth12:totalOfMonth12,
          evaluateGood:evaluateGood, evaluateNotGood:evaluateNotGood, totalOnlineFormat:totalOnlineFormat, comment:comment
        });
    }

}

module.exports = new AdminHomeController;