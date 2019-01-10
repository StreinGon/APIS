const router=require('express').Router();
const dataController=require('../controllers/data')



router.post('/saveData',(req, res) => dataController.saveData(req,res));

router.get('/sendData',(req, res) => dataController.sendData(req,res));


module.exports = router ;