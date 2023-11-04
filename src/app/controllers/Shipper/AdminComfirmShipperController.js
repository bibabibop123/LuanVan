const Course = require('../../models/Course');
const { PaymentStatus } = require('../../../config/enum.config');
const Order = require('../../models/Order');
const StaffShip = require('../../models/staffShip');
class AdminComfirmShipperController {
    async adminComfirmShipper ( req, res, next) {
        // const orders = await Order.find({status:PaymentStatus.doi_van_chuyen}).sort({ createdAt: -1 }).lean();
        console.log(req.staffShip)
        const orders = await Order.find({status:PaymentStatus.dang_van_chuyen, staffShip:req.staffShip._id}).sort({ createdAt: -1 }).lean();
        // console.log('orders: ', orders);
        res.render('shipper/comfirmShipper', { orders, layout: 'shipperLayout' });
    }
}

module.exports = new AdminComfirmShipperController;