const userModel = require('../models/user');

class ConfirmPasswordController {
    async confirmPassword ( req, res, next) {
        return res.render('confirmPass');
    }

    async createNewPass (req, res, next) {
        // console.log(req.body.confrimMail);
        const verifiMail = await userModel.findOneAndUpdate({verification:req.body.confirmMail},{password:req.body.newPassword});
        if(!verifiMail){
            req.flash('message', 'Mã xác nhận không chính xác !!!');
            return res.redirect('back');
        } 
        req.flash('message', 'Tạo mật khẩu mới thành công !!!');
        return res.redirect('/login');
        // day verification:req.body.confirmMail
        // console.log(verifiMail);
        // if (req.body.confirmMail === verifiMail.verification) {
        //     await userModel.findOneAndUpdate({verification:req.body.confirmMail},{password:req.body.newPassword});
        //     req.flash('message', 'Tạo mật khẩu mới thành công !!!');
        //     return res.redirect('/login');
        // } else {
        //     req.flash('message', 'Mã xác nhận không chính xác !!!');
        // }
    }

}

module.exports = new ConfirmPasswordController;