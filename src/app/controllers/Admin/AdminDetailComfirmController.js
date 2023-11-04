const { PaymentStatus } = require('../../../config/enum.config');
const Course = require('../../models/Course');
const Order = require('../../models/Order');
const StaffShip = require('../../models/staffShip');
const city = require('../../../raw.githubusercontent.com_kenzouno1_DiaGioiHanhChinhVN_master_data.json_fbclid=IwAR2C1lNSPtkItOSeMoDlQpfr61OA_CmBcXo3t54WW_lQNNDylh5ZUOhO9Mc.json')

class AdminDetailComfirmController {
    async adminDetailComfirm ( req, res, next) {
        console.log(req.body.shipper)
        const order = await Order.findById(req.params.id).populate('addressId').lean();
        const staffShip = await StaffShip.find(req.params).lean();
        let listAddress = order.addressId;
        
        // const shipper = document.getElementById("shipper");
        // const selectedValue = selectElement.value;
        console.log('staffShip', req.body);
        return res.render('admin/detail-comfirm',{order:order, listAddress:listAddress, staffShip:staffShip, layout:'admin'});
    }
    async adminAcceptOrder(req,res,next){
        const staffShip = await StaffShip.findById(req.body.shipper).lean();
        await Order.findByIdAndUpdate(req.params.id,{$set:{status:PaymentStatus.doi_van_chuyen,staffShip:req.body.shipper}});
        // await Order.create
        return res.redirect('/admin/order-comfirm/');
    }
    async adminCancelOrder(req,res,next){
        await Order.findByIdAndUpdate(req.params.id,{$set:{status:PaymentStatus.da_huy}});
        return res.redirect('/admin/order/');
    }
}

module.exports = new AdminDetailComfirmController;