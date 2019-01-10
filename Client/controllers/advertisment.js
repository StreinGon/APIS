const request = require('request-promise')

const getAdvertisment = (req,res) => {
  const options = {
    method: 'GET',
    uri: 'http://localhost:8081/client/sendAD',
    json:true,
    body: req.body
  }
  request(options)
    .then((response) => {
      return res.json(response)
    })
    .catch((err) => {
      return res.send(err);
    })
}
const getToken = (req,res) => {
  const options = {
    method: 'GET',
    uri: 'http://localhost:8081/company/sendAD',
    json:true,
    body: req.body
  }
  request(options)
    .then((response) => {
      return res.json(response)
    })
    .catch((err) => {
      return res.send(err);
    })
}
module.exports = { getAdvertisment }