const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productImage = new Schema({
    productId: {type: mongoose.Types.ObjectId, ref: "Course"},
    image1: { type: String},
    image2: { type: String},
  }, {
    timestamps: true,
  });


module.exports = mongoose.model('productImage', productImage);