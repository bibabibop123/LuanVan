const { PaymentStatus } = require('../../../config/enum.config');
const Course = require('../../models/Course');
const Order = require('../../models/Order');
const StaffShip = require('../../models/staffShip');
const city = require('../../../raw.githubusercontent.com_kenzouno1_DiaGioiHanhChinhVN_master_data.json_fbclid=IwAR2C1lNSPtkItOSeMoDlQpfr61OA_CmBcXo3t54WW_lQNNDylh5ZUOhO9Mc.json')

class AdminDetailCancelShipperController {
    async adminDetailCancelShipper ( req, res, next) {
        // console.log(req.body)
        const order = await Order.findById(req.params.id).populate('addressId').populate('staffShip').lean();
        const staffShip = await StaffShip.find(req.params).lean();
        let listAddress = order.addressId;
        // console.log('staffShip', staffShip);
        return res.render('shipper/detailCancelShipper',{order:order,listAddress:listAddress,staffShip:staffShip, layout:'shipperLayout'});
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

module.exports = new AdminDetailCancelShipperController;