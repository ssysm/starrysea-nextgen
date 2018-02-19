//Import Activity Schema and mongoose
const Activity = require('../../models/Activity');
const mongoose = require('mongoose');
//Return Activity detail
//@method:GET
//@query: uid
//@return: JSON Object
viewActivity = (req,res)=>{
    "use strict";
    var {uid} = req.query;
    Activity.findOne({
        _id:mongoose.Types.ObjectId(uid)
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
                    response:"Not Found"
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

module.exports = viewActivity;