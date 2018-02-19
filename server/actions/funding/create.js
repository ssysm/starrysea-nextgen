const Funding = require('../../models/Funding');
const mongoose = require('mongoose');
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

module.exports = createFundRecord;