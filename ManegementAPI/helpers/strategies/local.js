const  { Strategy } =  require('passport-local');
const UserModel = require('../../models/user')

const localStrategy = new Strategy(
  (username, password, done) => {
    UserModel
      .findOne({ username })
      .then((user)  => {
       
        if (!user) {
          return done(null, false);
        }
        if (password!==user.password) {
          return done(null, false);
        }
        return done(null, user);
      })
      .catch((err)  => {
        if (err) {
           return done(err);
        }
      });
  },
);

module.exports = localStrategy
