const UserModel = require('../../models/user');
const Course = require('../../models/Course');
const Order = require('../../models/Order');
const staffData = require('../../models/staff');
const roleData = require('../../models/role');
const StaffShip = require('../../models/staffShip');

class AdminLoginController {
    async login ( req, res, next) {
        const staff = await staffData.find().lean();
        const role = await roleData.find().lean();
        // console.log(role);
        res.render('admin/login',{layout:false});
    }
    async loginAction(req,res){
        const {staffEmail,staffPassword} = req.body;
        // console.log(req.body)
        const StaffExist = await staffData.findOne({staffEmail}).populate('roleId');
        // console.log(StaffExist);
        if(!StaffExist){
            console.log('sai tk');
            req.flash('message', 'Sai tên đăng nhập hoặc mật khẩu !!!');
            return res.redirect('/admin/login');
        }
        if(StaffExist.staffPassword != staffPassword){
            console.log('sai mk');
            req.flash('message', 'Mật khẩu không đúng !!!');
            return res.redirect('/admin/login');
        }
        req.flash('message', 'Đăng nhập thành công !!!');
        console.log('ok');
        req.session.staff = StaffExist;
        // console.log(req.session.staff);
        return res.redirect('/admin/');
    }
}

module.exports = new AdminLoginController;