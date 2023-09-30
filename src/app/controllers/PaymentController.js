const { PaymentStatus, PaymentMethod } = require('../../config/enum.config');
const Course = require('../models/Course');
const OrderModel = require('./../models/Order');

const BANK_NAME= 'techcombank';
const BANK_ACCOUNT='19037628573011';
class PaymentController {
    async payment ( req, res, next) {
        if(!req.user){
            req.flash('message', 'Vui lòng đăng nhập để tiến hành thanh toán !!!');
            return res.redirect('/login');
        }
        const cart = req.session.cart || [];
        if(cart.length ==0){
            req.flash('message', 'Giỏ hàng trống vui lòng thêm sản phẩm !!!');
            return res.redirect('/');
        }
        let total =0;
        cart.forEach(element => {
            total += element.price * element.quality;
        });
        
        return res.render('payment',{cart:cart,total:total});
    }
    async handlerUpdateProduct(productId,amount){
        return Course.findByIdAndUpdate(productId,{$inc:{quantity:amount}});
    } 
    async paymentConfirm(req,res){
        if(!req.user){
            req.flash('message', 'Vui lòng đăng nhập để tiến hành thanh toán !!!');
            return res.redirect('/login');
        }
        // console.log('req.body',req.body);
        const cart = req.session.cart || [];
        // console.log('req.session.cart',req.session.cart);
        if(cart.length ==0){
            req.flash('message', 'Giỏ hàng trống vui lòng thêm sản phẩm !!!');
            return res.redirect('/');
        }
        let total =0;
        cart.forEach(element => {
            total += element.price * element.quality;
        });
        
        const order = await OrderModel.create({...req.body,total,products:cart,user:req.user._id});
        const products = await Promise.all(req.session.cart.map((item)=>{
            return Course.findByIdAndUpdate(item.id,{$inc:{quantity:-item.quality}})
        }))
        console.log('products',products);
        // console.log('order',order);
        req.session.cart = [];
        if(order.paymentMethod == PaymentMethod.atm){
            req.flash('message', 'Quét QR để thanh toán !!!');
            return res.redirect(`/payment/confirm/${order.code}`);
        }
        req.flash('message', 'Thành Công. Chúng tôi sẽ thông báo qua email cho bạn sớm nhất !!!');
        // console.log(Course.quantity);
        return res.redirect('/');
    }
    

    async confirmPayment(req,res){
        const id = req.params.id;
    // console.log('req.session.cart',req.session.cart);
    // console.log(Course.quantity);
        if(!id){
            req.flash('message', 'Lỗi.... !!!');
            return res.redirect('/');
        }
        const order = await OrderModel.findOne({code:id,status:PaymentStatus.doi_thanh_toan});
        if(!order){
            req.flash('message', 'Lỗi.... !!!');
            return res.redirect('/');
        } 
        const url =`https://img.vietqr.io/image/${BANK_NAME}-${BANK_ACCOUNT}-compact2.jpg?amount=${order.total}&addInfo=${order.code}`
        res.render('confirm-payment',{url:url})
    }
}

module.exports = new PaymentController;