const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const warehouse = new Schema({
    ProductId: { type: Schema.Types.ObjectId, ref: 'Course'},
    importPrice: { type: Number},
    quantity: {type: Number},
    categoryId: {type: Schema.Types.ObjectId, ref: 'category'},
  }, {
    timestamps: true,
  });


module.exports = mongoose.model('warehouse', warehouse);
