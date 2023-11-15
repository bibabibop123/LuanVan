const { PaymentStatus } = require('../../../config/enum.config');
const Course = require('../../models/Course');
const Order = require('../../models/Order');
const StaffShip = require('../../models/staffShip');
const city = require('../../../raw.githubusercontent.com_kenzouno1_DiaGioiHanhChinhVN_master_data.json_fbclid=IwAR2C1lNSPtkItOSeMoDlQpfr61OA_CmBcXo3t54WW_lQNNDylh5ZUOhO9Mc.json')

class AdminDetailShippingController {
    async adminDetailShipping ( req, res, next) {
        // console.log(req.body)
        const order = await Order.findById(req.params.id).populate('addressId').populate('staffShip').populate('staffId').lean();
        const staffShip = await StaffShip.find(req.params).lean();
        let listAddress = order.addressId;
        console.log('order',order.staffShip);
        const shipper = await StaffShip.findById(order.staffShip);
        // console.log('shipper', shipper.staffShipName);
        return res.render('admin/detail-shipping',{order:order,listAddress:listAddress,staffShip:staffShip, layout:'admin'});
    }
    async adminAcceptOrder(req,res,next){
        await Order.findByIdAndUpdate(req.params.id,{$set:{status:PaymentStatus.hoan_thanh}});
        return res.redirect('/admin/order-shipping/');
    }
    // async adminCancelOrder(req,res,next){
    //     await Order.findByIdAndUpdate(req.params.id,{$set:{status:PaymentStatus.da_huy}});
    //     return res.redirect('/admin/order/');
    // }
}

module.exports = new AdminDetailShippingController;