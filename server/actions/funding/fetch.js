const Funding = require('../../models/Funding');
//Fetch Funding By Activity Ids and by page and limit
//@method:GET
//@query:activity_id,page,limit
//@return: JSON Object w/ embed Array
fetchFundById = (req,res)=>{
    "use strict";
    var { activity_id,page,limit } = req.query;
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
                const result = docs.record.slice(limit*(page-1),limit*(page-1)+limit);
                res.status(200).json({
                    success:true,
                    response:{
                        record:result
                    }
                })
            }
        }
    })
};

module.exports = fetchFundById;