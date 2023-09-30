const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Category = new Schema({
    category_name: { type: String},
    category_quantity: {type: Number},
  }, {
    timestamps: true,
  });


module.exports = mongoose.model('category', Category);