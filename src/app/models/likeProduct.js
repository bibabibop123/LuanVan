const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const likeProduct = new Schema({
    productId: {type: mongoose.Types.ObjectId, ref: "Course"},
    name_content: { type: String},
    username: { type: String},
    user: {type: mongoose.Types.ObjectId, ref: "user"},
  }, {
    timestamps: true,
  });


module.exports = mongoose.model('likeProduct', likeProduct);