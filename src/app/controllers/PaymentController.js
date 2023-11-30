const { PaymentStatus, PaymentMethod, listCityData, listWardsData, listDistrictData } = require('../../config/enum.config');
const Course = require('../models/Course');
const OrderModel = require('./../models/Order');
const address = require('../models/addressUser');
const User = require('./../models/user');
const paymentqr = require('./../models/paymentqr');
const paypal = require('paypal-rest-sdk');
const city = require('../../raw.githubusercontent.com_kenzouno1_DiaGioiHanhChinhVN_master_data.json_fbclid=IwAR2C1lNSPtkItOSeMoDlQpfr61OA_CmBcXo3t54WW_lQNNDylh5ZUOhO9Mc.json')
// const Paypal = require('../../public/js/paypal');

const BANK_NAME= 'vietcombank';
const BANK_ACCOUNT='0891000657068';
class PaymentController {
    async payment ( req, res, next) {
        if(!req.user){
            req.flash('message', 'Vui lòng đăng nhập để tiến hành thanh toán !!!');
            return res.redirect('/login');
        }
        const cart = req.session.cart || [];
        // console.log(cart)
        if(cart.length ==0){
            req.flash('message', 'Giỏ hàng trống vui lòng thêm sản phẩm !!!');
            return res.redirect('/');
        }
        let total =0;
        cart.forEach(element => {
            total += element.price * element.quality;
        });

        let listAddress = await address.find({userId: req.user._id}).lean();

        // console.log('listAddress', listAddress);
        
        listAddress = listAddress.map((address) =>{
            return {
                ...address,
                cityName: listCityData().find((item)=>item.Id == address.City)?.Name,
                districtName : listDistrictData().find((item)=>item.Id == address.district)?.Name,
                wardName: listWardsData().find((item)=>item.Id == address.ward)?.Name,

            }
        })

        const quantities = cart.map(item => item.quality);
        const totalQuantity = quantities.reduce((acc, current) => acc + current, 0);

        
        return res.render('payment',{cart:cart, listAddress:listAddress,totalQuantity:totalQuantity, total:total});
    }

    async handlerUpdateProduct(productId,amount){
        return Course.findByIdAndUpdate(productId,{$inc:{quantity:amount}});
    }

    async paymentConfirm(req,res){
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
        let totalImport = 0;
        cart.forEach(element => {
            total += element.price * element.quality;
        });

        cart.forEach(element => {
            totalImport += element.importPrice * element.quality;
        });

        console.log(totalImport)
        
        const quantities = cart.map(item => item.quality);
        const totalQuantity = quantities.reduce((acc, current) => acc + current, 0);
        const order = await OrderModel.create({...req.body,totalImport,total,totalQuantity,products:cart,user:req.user._id,addressId:req.body.addressnew});
        const products = await Promise.all(req.session.cart.map((item)=>{
            return Course.findByIdAndUpdate(item.id,{$inc:{quantity:-item.quality}})
        }))

        req.session.cart = [];
        if(order.paymentMethod == PaymentMethod.atm){
            req.flash('message', 'Quét QR để thanh toán !!!');
            return res.redirect(`/payment/confirm/${order.code}`);
        }

        req.session.cart = [];
        if (order.paymentMethod == PaymentMethod.paypal) {

            req.flash('message', 'Thanh toán và đặt hàng thành công !!!');
            return res.redirect('/');
        }

        req.flash('message', 'Thành Công. Chúng tôi sẽ thông báo qua email cho bạn sớm nhất !!!');
        // console.log(order)
        // console.log(Course.quantity);
        return res.redirect('/');
    }
    

    async confirmPayment(req,res){
        const id = req.params.id;

        if(!id){
            req.flash('message', 'Lỗi.... !!!');
            return res.redirect('/');
        }
        const order = await OrderModel.findOne({code:id,status:PaymentStatus.thanh_toan_qr});
        // console.log(order);
        if(!order){
            req.flash('message', 'Lỗi.... !!!');
            return res.redirect('/');
        } 
        const url =`https://img.vietqr.io/image/${BANK_NAME}-${BANK_ACCOUNT}-compact2.jpg?amount=${order.total}&addInfo=${order.code}`
        res.render('confirm-payment',{url:url})
    }

}

module.exports = new PaymentController;