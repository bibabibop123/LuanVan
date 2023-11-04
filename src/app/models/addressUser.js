const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Address = new Schema({
    City: { type: String},
    nameCity: { type: String},
    district: { type: String},
    nameDistrict: { type: String},
    ward: { type: String},
    nameWard: { type: String},
    road: {type: String},
    userId: {type: Schema.Types.ObjectId, ref: 'user'},
  }, {
    timestamps: true,
  });


module.exports = mongoose.model('address', Address);