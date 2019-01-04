const mongoose = require('mongoose');

const Statistic = new mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  advertisments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Advertisment'}],
  data: [Object]
})

const StatisticModel=mongoose.model('Statistic',Statistic);

module.exports = StatisticModel;