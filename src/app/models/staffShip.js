const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StaffShip = new Schema({
    staffShipName: { type: String},
    staffShipPhone: { type: String},
  }, {
    timestamps: true,
  });


module.exports = mongoose.model('staffShip', StaffShip);