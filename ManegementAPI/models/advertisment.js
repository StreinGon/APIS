const mongoose = require('mongoose');

const Advertisment = new mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  company:{type: mongoose.Schema.Types.ObjectId, ref: 'Company'},
  eventId: {
    id:Number,
    name:String
  },
  targeting: {
    platform: [String],
    keyword: String,
    mask:String,
    ip: String,
    location: {
      latitude: [Number],
      longitude: [Number]
    },
    city: [String],
    country: [String],
    internetConnectionType: [String],
    deviceOS: [String],
    deviceModel: [String]
  }

},{ timestamps: true })

const AdvertismentModel=mongoose.model('Advertisment',Advertisment);

module.exports = AdvertismentModel;