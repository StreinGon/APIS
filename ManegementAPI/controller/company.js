const CompanyModel = require('../models/company');

const createCompany = (req,res) => {
  const newToken='token';
  const newPayload={...req.body,token:newToken};
  return CompanyModel.create(newPayload).then(company => {
    if(!company){
      return res.send('CompanyModel error');
    }
    return res.json(company);
  })
}

const getAccess = (req,res) => {
  return CompanyModel.findOne({url:req.query.url}).then(company => {
    if(!company){
      return res.send('Company not found');
    }
    return res.json(company.token);
  })
}

module.exports = { createCompany,getAccess }