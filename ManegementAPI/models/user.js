const mongoose = require('mongoose');

const User = new mongoose.Schema({
  username: String,
  password: String,
  email: String
})

const UserModel=mongoose.model('User',User);

module.exports = UserModel;