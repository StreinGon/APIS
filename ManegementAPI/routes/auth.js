const router = require('express').Router();
const authController = require('../controller/auth');

router.post(
  '/signup',
  (req, res) => authController.signup(req, res),
);
router.post(
  '/login',
  (req, res) => authController.login(req, res),
);
router.post(
  '/logout',
//  passport.authenticate('jwt', { session: false, failWithError: true }),
  (req, res) => authController.logout(req, res),
);