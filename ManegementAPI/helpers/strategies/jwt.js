const  { Strategy } =  require('passport-jwt');
const UserModel = require('../../models/user')


const cookieExtractor = (req) => {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies.Authorization;
  }
  return token;
};
const opts = {};
opts.jwtFromRequest = cookieExtractor;
opts.secretOrKey = 'secret';

const jwtStrategy = new Strategy(opts, (jwtPayload, done) => {
  UserModel
    .find({ username: jwtPayload.username })
    .then((user) => {
      if (user) {
        return done(null, user);
      }
      return done('AUTH_ERROR', false);
    })
    .catch((err) => {
      if (err) {
        return done(err, false);
      }
    });
});

module.exports = jwtStrategy ;