const Funding = require('../models/Funding');
const mongoose = require('mongoose');
//Fetch Funding By Activity Ids
//@method:GET
//@query:activity_id
//@return: JSON Object w/ embed Array
fetchFundById = (req,res)=>{
    "use strict";
    var { activity_id } = req.query;
    Funding.findOne({
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
    const data = {name, amount, message};
    Funding.update({
        activity_id:mongoose.Types.ObjectId(activity_id)
    },{
        $push:{
            record:data
        }
    },(err,funding)=>{
        if(err){
            res.status(500).json({
                success:false,
                response:err
            })
        }else{
            res.json({
                success:true,
                response:funding
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
  Funding.update({
      activity_id:req.body.activity_id
  }, { $pull: { record:{_id:mongoose.Types.ObjectId(req.body.uid) } } } ,{ multi: true },(err,docs)=>{
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