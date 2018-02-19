const works = require('../../models/Works');
const mongoose = require('mongoose');
//Delete Work
//@method:DELETE
//@body:uid
//@return:JSON Object
deleteWork = (req,res)=>{
    "use strict";
    works.remove({
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

module.exports = deleteWork;