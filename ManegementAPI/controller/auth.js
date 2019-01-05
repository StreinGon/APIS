const passport = require('passport');
const jsonwebtoken = require('jsonwebtoken');
const UserModel = require('../models/user');
const RoleModel = require('../models/role');

const singup = (req,res) => {
  return UserModel.create({username:req.body.username,password:req.body.password,email:req.body.email})
  .then(user => {
    if(!user){
      return res.send('Error');
    }
    RoleModel.create({status:1,user:user._id});
    return res.json(user);
  })
}

const login = (req,res,next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return  res.send('Error');
    }
    if (!user) {
      return res.send('Error');
    }
    return req.logIn(user, (error) => {
      if (error) return error;
      const changedUser = {
        _id: user._id,
        username: user.username,
        email: user.email,
      };
      const token = jsonwebtoken.sign(changedUser, 'secret', {
        expiresIn: 86400 * 30,
      });
      res.cookie('Authorization', token);
      return res.json({ token, user: changedUser })
    });
  })(req, res, next);
}

const logout = (req,res) => {
  req.logout();
  res.cookie('Authorization', null);
  return res.status(200).send('Succesful');
}



module.exports = { singup,login,logout }