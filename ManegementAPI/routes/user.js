const router = require('express').Router();
const userController = require('../controller/user');
const passport = require('passport')


router.post(
  '/createAdvertisment',
  passport.authenticate('jwt', { session: false, failWithError: true }),
  (req, res) => userController.createAdvertisment(req, res),
);
router.get(
  '/sendAdvertisment',
  (req, res) => userController.sendAdvertisment(req, res),
);
router.get(
  '/getStatistic',
  passport.authenticate('jwt', { session: false, failWithError: true }),
  (req, res) => userController.getStatistic(req, res),
);


module.exports = router;