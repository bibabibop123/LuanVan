const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: { type: String},
    lastName: { type: String},
    password: { type: String},
    email: { type: String,unique: true},
    phoneNumber: { type: String},
    address: { type: String},
    verification: { type: String},
    addressnew: { type: String},
  }, {
    timestamps: true,
  });


module.exports = mongoose.model('users', UserSchema);

