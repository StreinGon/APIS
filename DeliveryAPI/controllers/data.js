const request = require('request-promise');


const saveData = (req,res) => {
  const options = {
    method: 'POST',
    uri: 'http://localhost:8082/data/saveData',
    body:{ action:req.body },
    json:true
  }
  request(options)
    .then((response) => {
        return res.send(response)
    })
    .catch( (err) => {
      return res.send(err);
    })
}
const getData = (req,res) => {
  const options = {
    method: 'GET',
    uri: 'http://localhost:8082/data/sendData',
    qs: {id:req.query.id},
    json:true
  }
  request(options)
    .then((response) => {
        return res.json({actions:response})
    })
    .catch( (err) => {
      return res.send(err);
    })
}

module.exports = { saveData,getData }