const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paymentqr = new Schema({
    bankNumber: { type: String},
    bankName: {type: String},
   
  }, {
    timestamps: true,
  });


module.exports = mongoose.model('paymentqr', paymentqr);
