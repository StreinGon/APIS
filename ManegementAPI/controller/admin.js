const UserModel = require('../models/user');
const RoleModel = require('../models/role');
const request = require('request-promise');


const users = (req,res) => {
  return RoleModel.findOne({user:req.user[0]._id}).then(role =>{
    if(!role){
      return res.send('Role error');
    }
    if(role.status!==2){
      return res.send('No permission');
    }

    return UserModel.find()
    .then(users => {
 
      if(!users){
        return res.send('Error');
      }
      return res.json(users);
    })
  })
}
const user = (req,res) => {
  return RoleModel.findOne({user:req.user[0]._id}).then(role =>{
    if(!role){
      return res.send('Role error');
    }
    if(role.status!==2){
      return res.send('No permission');
    }

    return UserModel.findOne({_id:req.query.id})
    .then(user => {
 
      if(!user){
        return res.send('Error');
      }
      return res.json(user);
    })
  })
}
const refresh = (req,res) => {
  return RoleModel.findOne({user:req.user[0]._id}).then(role =>{
    if(!role){
      return res.send('Role error');
    }
    if(role.status!==2){
      return res.send('No permission');
    }
    const options = {
      method: 'GET',
      uri: 'http://localhost:8081/manegement/getAdvertisment',
      json:true,
    }
    request(options)
    .then((response) => {
      
      return res.json('Refreshed'); 
    })
    .catch((err) => {
      return res.send(err);
    })
  })
}

module.exports = { users,user,refresh }