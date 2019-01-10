const router = require('express').Router();
const companyController = require('../controller/company');
const passport = require('passport')


router.post(
  '/createCompany',
  passport.authenticate('jwt', { session: false, failWithError: true }),
  (req, res) => companyController.createCompany(req, res),
);
router.get(
  '/getAccess',
  (req, res) => companyController.getAccess(req, res)
);


module.exports = router;