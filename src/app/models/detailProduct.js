const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productDetail = new Schema({
    productId: {type: mongoose.Types.ObjectId, ref: "Course"},
    detailTop: { type: String},
    detailBot: { type: String},
  }, {
    timestamps: true,
  });


module.exports = mongoose.model('productDetail', productDetail);