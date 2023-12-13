const Course = require('../models/Course');
const User = require('./../models/user');
class ChangePassController {
    async changePass ( req, res, next) {
        
        return res.render('change-password');
    }
    async changePassAction ( req, res, next) {
        // console.log(req.body);
        const user = await User.findById(req.user._id);
        if(user.password !=req.body.oldPassword){
            req.flash('message', 'Mật Khẩu không đúng !!!');
            return res.redirect('/change-password');
        }
        if(req.body.newPassword != req.body.confirmPassword){
            req.flash('message', 'Mật Khẩu mới không giống nhau !!!');
            return res.redirect('/change-password');
        }
        // console.log(req.body)
        await User.findByIdAndUpdate(req.user._id,{password:req.body.newPassword});
        req.flash('message', 'Đổi mật khẩu thành công !!!');
        return res.redirect('/');
    }
}

module.exports = new ChangePassController;