const router = require('express').Router();
const adminController = require('../controller/admin');
const passport  = require('passport') ;
router.get(
  '/users',
  passport.authenticate('jwt', { session: false, failWithError: true }),
  (req, res) => adminController.users(req, res),
);


module.exports = router ;