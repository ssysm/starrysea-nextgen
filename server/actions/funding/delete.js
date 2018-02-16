const Funding = require('../../models/Funding');
const mongoose = require('mongoose');
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

module.exports = deleteFundRecord;
