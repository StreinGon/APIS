const router = require('express').Router();
const userController = require('../controller/user');

router.post(
  '/createAdvertisment',
  (req, res) => userController.createAdvertisment(req, res),
);
router.get(
  '/sendAdvertisment',
  (req, res) => userController.sendAdvertisment(req, res),
);


module.exports = router;