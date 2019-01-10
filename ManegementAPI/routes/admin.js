const router = require('express').Router();
const adminController = require('../controller/admin');
const passport  = require('passport') ;
router.get(
  '/getUsers',
  passport.authenticate('jwt', { session: false, failWithError: true }),
  (req, res) => adminController.users(req, res),
);
router.get(
  '/getUser',
  passport.authenticate('jwt', { session: false, failWithError: true }),
  (req, res) => adminController.user(req, res),
);

router.get(
  '/refresh',
  passport.authenticate('jwt', { session: false, failWithError: true }),
  (req, res) => adminController.refresh(req, res),
);
module.exports = router ;