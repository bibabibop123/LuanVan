const { PaymentStatus } = require('../../config/enum.config');
const Course = require('../models/Course');
const Order = require('../models/Order');
const StaffShip = require('../models/staffShip');


class AdminDetailComfirmController {
    async adminDetailComfirm ( req, res, next) {
        // console.log(req.body)
        const order = await Order.findById(req.params.id).lean();
        const staffShip = await StaffShip.find(req.params).lean();
        // console.log('staffShip', staffShip);
        return res.render('admin/detail-comfirm',{order:order,staffShip:staffShip, layout:'admin'});
    }
    async adminAcceptOrder(req,res,next){
        await Order.findByIdAndUpdate(req.params.id,{$set:{status:PaymentStatus.dang_van_chuyen}});
        return res.redirect('/admin/order/');
    }
    async adminCancelOrder(req,res,next){
        await Order.findByIdAndUpdate(req.params.id,{$set:{status:PaymentStatus.da_huy}});
        return res.redirect('/admin/order/');
    }
}

module.exports = new AdminDetailComfirmController;