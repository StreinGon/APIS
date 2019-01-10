const mongoose = require('mongoose');

const Evint = new mongoose.Schema({
  name: String,
  id: String,
  owner:String,
  url:String
})

const EventModel = mongoose.model('Event',Evint);

module.exports = EventModel