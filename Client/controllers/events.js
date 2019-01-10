
const request = require('request-promise')

const sendEvent = (req,res) => {
  const newBody={...req.body,url:req.protocol + '://' + req.get('host') + req.originalUrl }
  const options = {
    method: 'POST',
    uri: 'http://localhost:8081/data/saveData',
    json:true,
    body: newBody
  }
  request(options)
    .then((response) => {
      return res.json(response)
    })
    .catch((err) => {
      return res.send(err);
    })
}

module.exports = { sendEvent }