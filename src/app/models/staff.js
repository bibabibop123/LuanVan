const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const staff = new Schema({
    staffName: { type: String},
    staffEmail: { type: String},
    staffPassword: { type: String},
    staffPhone: { type: Number},
    staffSex: { type: String},
    staffAddress: { type: String},
    staffPosition: { type: String},
    roleId: {type: Schema.Types.ObjectId, ref: 'role'},
  }, {
    timestamps: true,
  });


module.exports = mongoose.model('staff', staff);