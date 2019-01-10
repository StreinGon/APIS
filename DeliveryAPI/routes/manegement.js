const router = require('express').Router();
const manegementController = require('../controllers/manegement');

router.get(
  '/getAdvertisment',
  (req, res) => manegementController.getAdvertisment(req, res),
);
router.get(
  '/sendStatistic',
  (req, res) => manegementController.sendStatistic(req, res),
);


module.exports = router;