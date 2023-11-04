const { PaymentStatus } = require('../../../config/enum.config');
const Course = require('../../models/Course');
const Order = require('../../models/Order');
const StaffShip = require('../../models/staffShip');
const city = require('../../../raw.githubusercontent.com_kenzouno1_DiaGioiHanhChinhVN_master_data.json_fbclid=IwAR2C1lNSPtkItOSeMoDlQpfr61OA_CmBcXo3t54WW_lQNNDylh5ZUOhO9Mc.json')

class AdminDetailCompleteShipperController {
    async adminDetailCompleteShipper ( req, res, next) {
        // console.log(req.body)
        const order = await Order.findById(req.params.id).populate('addressId').populate('staffShip').lean();
        const staffShip = await StaffShip.find(req.params).lean();
        let listAddress = order.addressId;
        // console.log('staffShip', staffShip);
        return res.render('shipper/detailCompleteShipper',{order:order,listAddress:listAddress,staffShip:staffShip, layout:'shipperLayout'});
    }
    // async adminAcceptOrder(req,res,next){
    //     const order = await Order.findById(req.params.id).populate('addressId').lean();
    //     await Order.findByIdAndUpdate(req.params.id,{$set:{status:PaymentStatus.hoan_thanh}});
    //     const nodemailer = require("nodemailer");
    //     const transporter = nodemailer.createTransport({
    //         service:'gmail',
    //         host: 'smtp.gmail.com',
    //         secure: 'gmail',
    //         auth: {
    //           // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    //           user: "thuhan445566@gmail.com",
    //           pass: "rklb ifay wjnf vsvy",
    //         },
    //       });

    //       await transporter.sendMail({
    //         from: '"LUXUBU" <noreply@firebase.com>', // sender address
    //         to: order.email, // list of receivers
    //         subject: "HOÀN THÀNH ĐƠN HÀNG", // Subject line
    //         text: 'Đơn hàng của bạn đã được hoàn thành !!!!', // plain text body
    //         html: "", // html body
    //     });
    //     // await userModel.findOneAndUpdate({email:req.body.emailComfirm}, {verification:randomString}).lean();
    //     req.flash('message', 'Đã gửi email !!!');
    //     return res.redirect('/shipper/comfirmShipper/');
    // }
    // async adminCancelOrder(req,res,next){
    //     await Order.findByIdAndUpdate(req.params.id,{$set:{status:PaymentStatus.da_huy}});
    //     return res.redirect('/admin/order/');
    // }
}

module.exports = new AdminDetailCompleteShipperController;