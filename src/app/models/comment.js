const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Comment = new Schema({
    productId: {type: mongoose.Types.ObjectId, ref: "Course"},
    content: { type: String},
    username: {type: String},
  }, {
    timestamps: true,
  });


module.exports = mongoose.model('comment', Comment);