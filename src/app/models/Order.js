const mongoose = require('mongoose');
const { makeId } = require('../../common/text.helper');
const { PaymentStatus, PaymentMethod } = require('../../config/enum.config');
const Schema = mongoose.Schema;


const Order = new Schema({
    name: { type: String},
    address: { type: String},
    phone: { type: String},
    email: { type: String},
    paymentMethod: { type: String,
    enum: PaymentMethod},
    products: [{ type: Object}],
    total: { type: Number},
    totalQuantity:{ type: Number},
    shipper: { type: String},
    cancellationReason: {type: String},
    evaluate: { type: String},
    evaluateImage: { type: String},
    evaluateContent: { type: String},
    feedback: { type: String},
    addressId: { type: mongoose.Types.ObjectId, ref: "address"},
    user: {type: mongoose.Types.ObjectId, ref: "user"},
    status:{
      type:String,
      enum: PaymentStatus,
      default:function(){
        if(this.paymentMethod == PaymentMethod.code)  {
          return PaymentStatus.da_dat_hang;
        }
        if(this.paymentMethod == PaymentMethod.atm)  {
          return PaymentStatus.thanh_toan_qr;
        }
        if(this.paymentMethod == PaymentMethod.paypal)  {
          return PaymentStatus.thanh_toan_paypal;
        }
      }
    },
    staffShip:{
      type: mongoose.Types.ObjectId, ref: "staffShip"
    },
    code:{
      type:String,
      default:function(){
        if(this.paymentMethod==PaymentMethod.atm){
          return makeId(8).toUpperCase()
        }
        if(this.paymentMethod==PaymentMethod.paypal){
          return makeId(8).toUpperCase()
        }
        return null;
      }
    }
  }, {
    timestamps: true,
  });


module.exports = mongoose.model('Order', Order);

