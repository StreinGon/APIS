const redis = require('redis');
const bluebird = require('bluebird');

const checker = require('../helpers/checker');

bluebird.promisifyAll(redis);

const sendAD =  (req,res) => {

    const client = redis.createClient();
    return client.KEYS('*', (err,response)=>{

      if(!response || response.length<1){
        return res.send('Advertisment not found');
      }

      const promiseArray=[];
      const ads=[];
      response.forEach(key => {
        const promise =client.getAsync(key).then((ad)=>{
          
          const adJson=JSON.parse(ad);
          if(adJson && adJson.length>0){
        
            adJson.forEach(singleAD => {
              let check=false;
              check=checker(req,singleAD);
              if(check===false){
                ads.push(singleAD);
              }  
            })
          }
        })
        promiseArray.push(promise);
      });
      return Promise.all(promiseArray).then(() => {
 
        return res.json(ads);
      });
    })
}

module.exports = { sendAD }