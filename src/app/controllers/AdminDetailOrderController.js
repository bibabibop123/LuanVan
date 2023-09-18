const { PaymentStatus } = require('../../config/enum.config');
const Course = require('../models/Course');
const Order = require('../models/Order');


class AdminDetailOrderController {
    async adminDetailOrder ( req, res, next) {
        console.log(req.body)
        const order = await Order.findById(req.params.id).lean();
        return res.render('admin/detail-order',{order:order, layout:'admin'});
    }
    async adminAcceptOrder(req,res,next){
        await Order.findByIdAndUpdate(req.params.id,{$set:{status:PaymentStatus.xac_nhan}});
        return res.redirect('/admin/order/');
    }
    async adminCancelOrder(req,res,next){
        await Order.findByIdAndUpdate(req.params.id,{$set:{status:PaymentStatus.da_huy}});
        return res.redirect('/admin/order/');
    }
}

module.exports = new AdminDetailOrderController;