
const AdvertismentModel = require('../models/advertisment');


const createAdvertisment = (req,res) => {
  return AdvertismentModel.create(req.body).then(ad => {
    if(!ad){
      return res.send('AD error');
    }
    return res.json(ad);
  })
}
const sendAdvertisment = (req,res) => {
  return AdvertismentModel.find({user:req.query.id}).then(ads => {
    if(!ads){
      return res.send('AD error');
    }
    return res.json(ads);
  })
}

module.exports = { sendAdvertisment,createAdvertisment }