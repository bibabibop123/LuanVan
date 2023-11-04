const Course = require('../../models/Course');
const { PaymentStatus } = require('../../../config/enum.config');
const Order = require('../../models/Order');
const StaffShip = require('../../models/staffShip');
class AdminCancelShipperController {
    async adminCancelShipper ( req, res, next) {
        // const orders = await Order.find({status:PaymentStatus.doi_van_chuyen}).sort({ createdAt: -1 }).lean();
        console.log(req.staffShip)
        const orders = await Order.find({status:PaymentStatus.huy_van_chuyen, staffShip:req.staffShip._id}).sort({ createdAt: -1 }).lean();
        // console.log('orders: ', orders);
        res.render('shipper/cancelShipper', { orders, layout: 'shipperLayout' });
    }
    // async adminAcceptOrder(req,res,next){
    //     await Order.findByIdAndUpdate(req.params.id,{$set:{status:PaymentStatus.xac_nhan}});
    //     return res.redirect('/admin/order/');
    // }
    // async adminCancelOrder(req,res,next){
    //     await Order.findByIdAndUpdate(req.params.id,{$set:{status:PaymentStatus.da_huy}});
    //     return res.redirect('/admin/order/');
    // }
}

module.exports = new AdminCancelShipperController;