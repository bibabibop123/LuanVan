const Course = require('../models/Course');
const User = require('./../models/user');

class UserController {
    async user ( req, res, next) {
        const user = await User.findById(req.user._id).lean();
        return res.render('user',{userInfo:user});
    }
    async updateUser(req,res,next){
        await User.findByIdAndUpdate(req.user._id,{...req.body});
        req.flash('message', 'Cập nhật thành công !!!');
        return res.redirect('/user');
    }
}

module.exports = new UserController;