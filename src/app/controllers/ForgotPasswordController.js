const userModel = require('../models/user');

function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charactersLength);
      result += characters.charAt(randomIndex);
    }
  
    return result;
  }
class ForgotPasswordController {
    async forgotPassword ( req, res, next) {

        
      return res.render('forgotPassword');

    }

    async confirmEmail (req, res, next) {

        // console.log(req.body.emailComfirm);
        const user = await userModel.find().lean();
        const emailToConfirm = req.body.emailComfirm;

        const matchingUser = user.find((userItem) => userItem.email === emailToConfirm);

        if (matchingUser) {
          console.log('Email có:', emailToConfirm);
        } else {
          req.flash('message', 'email hiện chưa được đăng ký');
          return res.redirect('back');
        }
        
        const nodemailer = require("nodemailer");

        const transporter = nodemailer.createTransport({
          service:'gmail',
          host: 'smtp.gmail.com',
          secure: 'gmail',
          auth: {
            // TODO: replace `user` and `pass` values from <https://forwardemail.net>
            user: "thuhan445566@gmail.com",
            pass: "ooug xjmy nxnl ytdx",
          },
        });

        
          
        const randomString = generateRandomString(6);
        // console.log('chuoi ngau nhien: ', randomString);
        await transporter.sendMail({
            from: '"LUXUBU" <noreply@firebase.com>', // sender address
            to: req.body.emailComfirm, // list of receivers
            subject: "MÃ XÁC NHẬN", // Subject line
            text: randomString, // plain text body
            html: "", // html body
        });
        await userModel.findOneAndUpdate({email:req.body.emailComfirm}, {verification:randomString}).lean();
        req.flash('message', 'Mã xác nhận đã được gửi. Kiểm tra email của bạn !!!');
        return res.redirect('/confirmPass');
    }
}

module.exports = new ForgotPasswordController;