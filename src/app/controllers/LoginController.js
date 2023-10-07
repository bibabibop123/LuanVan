const UserModel = require('../models/user');
class LoginController {
    async login ( req, res, next) {
        res.render('login');
    }
    async loginAction(req,res){
        const {email,password} = req.body;
        const userExist = await UserModel.findOne({email});
        if(!userExist){
            req.flash('message', 'Sai tên đăng nhập hoặc mật khẩu !!!');
            return res.redirect('/login');
        }
        if(userExist.password != password){
            req.flash('message', 'Mật khẩu không đúng !!!');
            return res.redirect('/login');
        }
        req.flash('message', 'Đăng nhập thành công !!!');
        req.session.user = userExist;
        return res.redirect('/');
    }
}

module.exports = new LoginController;