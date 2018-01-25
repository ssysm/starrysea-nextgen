const Funding = require('../models/Funding');
const mongoose = require('mongoose');
//Fetch Funding By Activity Ids
//@method:GET
//@query:activity_id
//@return: JSON Object w/ embed Array
fetchFundById = (req,res)=>{
    "use strict";
    var { activity_id } = req.query;
    Funding.find({
        activity_id
    },(err,docs)=>{
        if(err){
            res.status(500).json({
                success:false,
                response:err
            })
        }else{
            if(!docs){
                res.status(404).json({
                    success:false,
                    response:"No Match Found"
                })
            }else{
                res.status(200).json({
                    success:true,
                    response:docs
                })
            }
        }
    })
};
//Create A Fund Record
//@method: POST
//@body:activity_id,name,amount,message
//@return: JSON Object
createFundRecord = (req,res)=>{
    "use strict";
    var { activity_id,name,amount,message } = req.body;
    const data = {activity_id, name, amount, message};
    Funding.create(data,(err,docs)=>{
        if(err){
            res.status(500).json({
                success:false,
                response:err
            })
        }else{
            res.status(200).json({
                success:true,
                response:docs
            })
        }
    })
};
//Delete A Fund Record
//@method:DELETE
//@body:uid
//@return:JSON Object
deleteFundRecord = (req,res)=>{
    "use strict";
  Funding.remove({
      _id:mongoose.Types.ObjectId(req.body.uid)
  },(err,docs)=>{
      if(err){
          res.status(500).json({
              success:false,
              response:err
          })
      }else{
          res.status(200).json({
              success:true,
              response:docs
          })
      }
  })
};

module.exports.createFundRecord = createFundRecord;
module.exports.fetchFundById = fetchFundById;
module.exports.deleteFundRecord = deleteFundRecord;