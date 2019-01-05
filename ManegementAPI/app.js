const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const UserModel = require('./models/user');
const authRouter = require('./routes/auth');
const adminRouter = require('./routes/admin');
const jwtStrategy = require('./helpers/strategies/jwt');
const localStrategy = require('./helpers/strategies/local');
const app = express();

mongoose.connect(
  'mongodb://localhost/ManagerAPI',
  { useNewUrlParser: true },
);

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  UserModel.findById(id, (err, user) => {
    done(err, user);
  });
});
passport.use('jwt', jwtStrategy);
passport.use('local', localStrategy);
app.use(cors());
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json())
app.use('/auth',authRouter);
app.use('/admin',adminRouter);
app.listen(8080, () => console.log('ManagerAPI Now Running On localhost:8080'));