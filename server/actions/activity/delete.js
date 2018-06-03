//Import Activity Schema and mongoose
const Activity = require('../../models/Activity');
const Funding = require('../../models/Funding');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
//Delete Activity
//@method:DELETE
//@body:uid
//@return:JSON Object
deleteActivity = (req,res)=>{
    "use strict";
    Activity.findOne({
        _id:mongoose.Types.ObjectId(req.body.uid)
    },(err3,docs3)=>{
        if(err3){console.log(err3)}
        fs.unlinkSync(path.join(__dirname+'/../../public/activity/'+docs3.cover));
        Activity.remove({
            _id:mongoose.Types.ObjectId(req.body.uid)
        },(err,docs)=>{
            if(err){
                res.status(500).json({
                    success:false,
                    response:err
                })
            }else{
                Funding.remove({
                    activity_id:req.body.uid
                },(err2,fund)=>{
                    if(err2){
                        res.status(500).json({
                            success:false,
                            response:err2
                        })
                    }else{
                        res.status(200).json({
                            success:true,
                            response:{
                                q1:docs,
                                q2:fund
                            }
                        })
                    }
                })
            }
        })
    });
};
module.exports = deleteActivity;