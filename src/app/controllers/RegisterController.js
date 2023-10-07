const userModel = require('../models/user');

class RegisterController {
    async register ( req, res, next) {
        // console.log(res.locals.message);
        res.render('register');
    }

    async registerAction(req,res,next){
        const {email} = req.body ;
        const userExist = await userModel.findOne({email});
        if(userExist){
            req.flash('message', 'Người dùng đã tồn tại')
            return res.redirect('/register');
        }
        await userModel.create({...req.body});
        req.flash('message', 'Đăng ký thành công !!!')
        res.redirect('/login');
    }
}

module.exports = new RegisterController;