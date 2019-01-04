const mongoose = require('mongoose');

const Advertisment = new mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  type: String,
  title: String,
  data: [Object]
})

const AdvertismentModel=mongoose.model('Advertisment',Advertisment);

module.exports = AdvertismentModel;