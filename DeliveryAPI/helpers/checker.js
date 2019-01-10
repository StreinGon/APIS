const checker = (req,singleAD) => {

  if(req.body.url){
    if(req.body.url!==singleAD.company.url){
      return true;
    }

  }

  if(req.body.token && req.body.token!==singleAD.company.token){
    return true;
  }
 
  if(req.body.eventId){
    if(req.body.eventId.id && req.body.eventId.id!== singleAD.eventId.id){
      return true;
    }
    if(req.body.eventId.name && req.body.eventId.name!== singleAD.eventId.name){
      return true;
    }
  }

  if(req.body.targeting){
    if(req.body.targeting.keyword && req.body.targeting.keyword!== singleAD.targeting.keyword){
      return true;
    }
    if(req.body.targeting.ip && req.body.targeting.ip!== singleAD.targeting.ip){
      return true;
    }
    if(req.body.targeting.mask && req.body.targeting.mask!== singleAD.targeting.mask){
      return true;
    }
    
    if(req.body.targeting.location && req.body.targeting.location.latitude && req.body.targeting.location.longitude){
 
      if(singleAD.targeting.location.latitude.indexOf(req.body.targeting.location.latitude)===-1 || singleAD.targeting.location.longitude.indexOf(req.body.targeting.location.longitude)===-1)
      {
        return true;
      }
    }

    if(req.body.targeting.platform ){
      if(singleAD.targeting.platform.indexOf(req.body.targeting.platform)===-1)
      {
        return true;
      }
    }
    if(req.body.targeting.city ){
      if(singleAD.targeting.city.indexOf(req.body.targeting.city)===-1)
      {
        return true;
      }
    }
    if(req.body.targeting.country ){
      if(singleAD.targeting.country.indexOf(req.body.targeting.country)===-1)
      {
        return true;
      }
    }

    if(req.body.targeting.internetConnectionType ){
      if(singleAD.targeting.internetConnectionType.indexOf(req.body.targeting.internetConnectionType)===-1)
      {
        return true;
      }
    }
    if(req.body.targeting.deviceOS ){
      if(singleAD.targeting.deviceOS.indexOf(req.body.targeting.deviceOS)===-1)
      {
        return true;
      }
    }

    if(req.body.targeting.deviceModel ){
      if(singleAD.targeting.deviceModel.indexOf(req.body.targeting.deviceModel)===-1)
      {
        return true;
      }
    }
  
  }
  return false;
}

module.exports = checker ;