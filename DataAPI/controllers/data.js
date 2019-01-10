const EventModel = require('../models/event')


const saveData=(req,res) => {
  
  return EventModel.create(req.body.action).then(stat => {
    if(!stat){
      return res.send('Error');
    }
    return res.send('Data succesfully saved');
  })
};

const sendData = (req,res) => {
  return EventModel.find({owner:req.query.id}).then(event => {
    if(!event){
      return res.send('Error');
    }
    return res.json(event);
  })
}

module.exports = { saveData,sendData }
