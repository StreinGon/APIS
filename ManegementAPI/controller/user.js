
const AdvertismentModel = require('../models/advertisment');
const request = require('request-promise');


const createAdvertisment = (req,res) => {
  const payload=req.body;
  payload.user=req.user[0]._id;
  return AdvertismentModel.create(payload).then(ad => {
    if(!ad){
      return res.send('AD error');
    }
    return res.json(ad);
  })
}
const sendAdvertisment = (req,res) => {
  return AdvertismentModel.find({}).populate('company').then(ads => {
    if(!ads){
      return res.send('AD error');
    }
    return res.json(ads);
  })
}
const getStatistic = (req,res) => {
  const options = {
    method: 'GET',
    uri: 'http://localhost:8081/manegement/sendStatistic',
    json:true,
    qs:{id:JSON.stringify(req.user[0]._id).substring(1,JSON.stringify(req.user[0]._id).length-1)}
  }
  request(options)
  .then((response) => {
    
    return res.json(response); 
  })
  .catch((err) => {
    return res.send(err);
  })
}

module.exports = { sendAdvertisment,createAdvertisment,getStatistic }