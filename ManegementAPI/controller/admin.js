const UserModel = require('../models/user');
const RoleModel = require('../models/role');

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


module.exports = { users,user }