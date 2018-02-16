const Funding = require('../../models/Funding');
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

module.exports = fetchFundById;