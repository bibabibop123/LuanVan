const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Category = new Schema({
    categoryId: { type: String},
    category_name: { type: String},
    categoryQuantity: {type: String},
  }, {
    timestamps: true,
  });


module.exports = mongoose.model('category', Category);