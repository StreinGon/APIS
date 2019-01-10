const router=require('express').Router();
const eventsController=require('../controllers/events')

router.post('/sendEvent',(req, res) => eventsController.sendEvent(req,res));

module.exports = router ;