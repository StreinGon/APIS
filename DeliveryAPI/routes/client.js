const router = require('express').Router();
const clientController = require('../controllers/client');

router.get(
  '/sendAD',
  (req, res) => clientController.sendAD(req, res),
);



module.exports = router;