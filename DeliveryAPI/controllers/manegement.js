const request = require('request-promise');
const redis = require('redis');



const getAdvertisment = (req,res) => {
  const options = {
    method: 'GET',
    uri: 'http://localhost:8080/user/sendAdvertisment',
    json:true,
    qs: null
  }
  request(options)
    .then((response) => {
      const client = redis.createClient();
      
      if(response && response.length>0){
        const map=new Map();
        client.flushall();
        response.forEach(ad=>{
      
          const check=map.get(ad.user);
          if(!check){
            map.set(ad.user, [ad]);
          }
          else{
            check.push(ad);
            map.set(ad.user,check)
          }
        })

        map.forEach(element => {

          client.set(element[0].user,JSON.stringify(element))
        })
      }
      return res.json(response)
    })
    .catch((err) => {
      return res.send(err);
    })
}

const sendStatistic = (req,res) => {
  const options = {
    method: 'GET',
    uri: 'http://localhost:8082/data/sendData',
    json:true,
    qs: {id:req.query.id}
  }
  request(options)
  .then((response) => {
 
    if(!response || response<1){
      return res.json('Statistic not found');
    }
    return res.json(response);
  })
  .catch((err) => {
    return res.send(err);
  })
}


module.exports = { getAdvertisment,sendStatistic }