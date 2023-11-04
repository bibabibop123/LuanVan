const UserModel = require('../../models/user');
const Course = require('../../models/Course');
const Order = require('../../models/Order');
const StaffShip = require('../../models/staffShip');

class AminLoginShipperController {
    async loginShipper ( req, res, next) {
        //const shipper = await StaffShip.find().lean();
        // console.log('loginShipper', shipper)
        res.render('shipper/loginShipper',{layout:false});
    }
    async loginAction(req,res){
        const {emailShipper,passwordShipper} = req.body;
        const StaffShipExist = await StaffShip.findOne({emailShipper});
        if(!StaffShipExist){
            // console.log('đúng');
            req.flash('message', 'Sai tên đăng nhập hoặc mật khẩu !!!');
            return res.redirect('/shipper/login');
        }
        if(StaffShipExist.passwordShipper != passwordShipper){
            req.flash('message', 'Mật khẩu không đúng !!!');
            return res.redirect('/shipper/login');
        }
        req.flash('message', 'Đăng nhập thành công !!!');
        req.session.staffShip = StaffShipExist;
        // console.log(req.session.staffShip);
        return res.redirect('/shipper/shipperAdmin');
    }
}

module.exports = new AminLoginShipperController;