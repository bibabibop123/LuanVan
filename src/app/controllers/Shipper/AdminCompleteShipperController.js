const Course = require('../../models/Course');
const { PaymentStatus } = require('../../../config/enum.config');
const Order = require('../../models/Order');
const StaffShip = require('../../models/staffShip');
class AdminCompleteShipperController {
    async adminCompleteShipper ( req, res, next) {
        // const orders = await Order.find({status:PaymentStatus.doi_van_chuyen}).sort({ createdAt: -1 }).lean();
        console.log(req.staffShip)
        const orders = await Order.find({status:PaymentStatus.hoan_thanh, staffShip:req.staffShip._id}).populate('staffShip').sort({ createdAt: -1 }).lean();
        // console.log('orders: ', orders);
        res.render('shipper/completeShipper', { orders, layout: 'shipperLayout' });
    }
}

module.exports = new AdminCompleteShipperController;