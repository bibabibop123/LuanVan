const { PaymentStatus } = require('../../config/enum.config');
const Course = require('../models/Course');
const Order = require('../models/Order');
const StaffShip = require('../models/staffShip');
const city = require('../../raw.githubusercontent.com_kenzouno1_DiaGioiHanhChinhVN_master_data.json_fbclid=IwAR2C1lNSPtkItOSeMoDlQpfr61OA_CmBcXo3t54WW_lQNNDylh5ZUOhO9Mc.json')

class DetailcancelController {
    async DetailCancel ( req, res, next) {
        // console.log(req.body)
        const order = await Order.findById(req.params.id).populate('addressId').lean();
        const staffShip = await StaffShip.find(req.params).lean();
        let listAddress = order.addressId;

        return res.render('detailCancel',{order:order,listAddress:listAddress,staffShip:staffShip});
    }

    // async CancelOrder(req,res,next){
    //     const order = await Order.findById(req.params.id).lean();

    //     await Order.findByIdAndUpdate(req.params.id,{$set:{status:PaymentStatus.da_huy}});
    //     const product = order.products;
    //     const quantities = product.map(products => products.quality);

    //     const productIds = product.map(product => product.id);
    //     const productCourses = await Promise.all(productIds.map(productId => Course.findById(productId)));
    //     for (let i = 0; i < productCourses.length; i++) {
    //         const updatedQuantity = productCourses[i].quantity + quantities[i];
        
    //         // Sử dụng Mongoose để cập nhật 'quantity' trong cơ sở dữ liệu
    //         await Course.findByIdAndUpdate(productIds[i], { $set: { quantity: updatedQuantity }});
    //     }
    //     // console.log(productCourses);
    //     req.flash('message', 'Hủy đơn hàng thành công !!!');
    //     return res.redirect('/order');
    // }
}

module.exports = new DetailcancelController;