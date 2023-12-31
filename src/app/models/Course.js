const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name_content: { type: String},
    total: { type: Number,default:0},
    importPrice: { type: Number,default:0},
    img: { type: String},
    brand: {type: String},
    quantity: {type: Number,default:0},
    detail: { type: String},
    categoryId: {type: Schema.Types.ObjectId, ref: 'category'},
    likeNumber: {type: Number,default:0},
    dislikeNumber: {type: Number,default:0},
  }, {
    timestamps: true,
  });


module.exports = mongoose.model('Course', Course);

