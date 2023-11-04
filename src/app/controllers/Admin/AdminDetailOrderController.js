const { PaymentStatus } = require('../../../config/enum.config');
const Course = require('../../models/Course');
const Order = require('../../models/Order');
const StaffShip = require('../../models/staffShip');
const address = require('../../models/addressUser');
const User = require('../../models/user');
const city = require('../../../raw.githubusercontent.com_kenzouno1_DiaGioiHanhChinhVN_master_data.json_fbclid=IwAR2C1lNSPtkItOSeMoDlQpfr61OA_CmBcXo3t54WW_lQNNDylh5ZUOhO9Mc.json')


class AdminDetailOrderController {
    async adminDetailOrder ( req, res, next) {
        // console.log(req.body)
        const order = await Order.findById(req.params.id).populate('addressId').lean();
        // let listAddress = await order.find({addressId: req.address._id}).lean();
        // console.log(order.email)
        let listAddress = order.addressId;
        return res.render('admin/detail-order',{order:order, listAddress:listAddress,  layout:'admin'});
    }
    async adminAcceptOrder(req,res,next){
        const order = await Order.findById(req.params.id).populate('addressId').lean();
        await Order.findByIdAndUpdate(req.params.id,{$set:{status:PaymentStatus.xac_nhan}});
        const nodemailer = require("nodemailer");
        const transporter = nodemailer.createTransport({
            service:'gmail',
            host: 'smtp.gmail.com',
            secure: 'gmail',
            auth: {
              // TODO: replace `user` and `pass` values from <https://forwardemail.net>
              user: "thuhan445566@gmail.com",
              pass: "rklb ifay wjnf vsvy",
            },
          });

          await transporter.sendMail({
            from: '"LUXUBU" <noreply@firebase.com>', // sender address
            to: order.email, // list of receivers
            subject: "XÁC NHẬN", // Subject line
            text: 'Đơn hàng của bạn đã được người bán xác nhận !!!!', // plain text body
            html: "", // html body
        });
        // await userModel.findOneAndUpdate({email:req.body.emailComfirm}, {verification:randomString}).lean();
        req.flash('message', 'Đã gửi email xác nhận đơn !!!');
        return res.redirect('/admin/order/');
    }
    async adminCancelOrder(req,res,next){
        await Order.findByIdAndUpdate(req.params.id,{$set:{status:PaymentStatus.da_huy}});
        return res.redirect('/admin/order/');
    }
}

module.exports = new AdminDetailOrderController;