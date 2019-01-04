const mongoose = require('mongoose');

const Role = new mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  status: Number
})

const RoleModel=mongoose.model('Role',Role);

module.exports = RoleModel;