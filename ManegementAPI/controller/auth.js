
const UserModel = require('../models/user')

const singup = (req,res) => {

}

const login = (req,res) => {
  if(!req.body.password || !req.body.email){

    return res.status(422).send('Incorrect data');

  }
  UserModel.findOne({email:req.body.email}).then(user => {
    if(!user){

      return res.status(422).send('User not found');
    }
    if(user.password !== req.body.password){

      return res.status(422).send('User password incorrent');
    }

  })
}

const logout = (req,res) => {
  req.logout();
  res.cookie('Authorization', null);
  return res.status(200).send('Succesful');
}



module.exports = { singup,login,logout }