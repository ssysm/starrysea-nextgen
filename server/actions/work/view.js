const works = require('../../models/Works');
const mongoose = require('mongoose');
//Return Work detail
//@query: uid
//@return: JSON Object
viewWork = (req,res)=>{
    "use strict";
    var {uid} = req.query;
    works.findOne({
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

module.exports = viewWork;