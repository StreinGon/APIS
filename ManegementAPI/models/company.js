const mongoose = require('mongoose');

const Company = new mongoose.Schema({
  url: String,
  name: String,
  token: String
})

const CompanyModel=mongoose.model('Company',Company);

module.exports = CompanyModel;
