const router = require('express').Router();
const authController = require('../controller/auth');

router.post(
  '/singup',
  (req, res) => authController.singup(req, res),
);
router.post(
  '/login',
  (req, res) => authController.login(req, res),
);
router.post(
  '/logout',
  (req, res) => authController.logout(req, res),
);


module.exports = router;