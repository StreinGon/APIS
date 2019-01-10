const router=require('express').Router();
const advertismentController=require('../controllers/advertisment')

router.get('/getAdvertisment',(req, res) => advertismentController.getAdvertisment(req,res));

module.exports = router ;