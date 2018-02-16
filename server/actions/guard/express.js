const User = require('../../models/User');
const mongoose = require('mongoose');
const atob = require('atob');
//Check Admin Using Express
//@params:@cookie:token
//@return:Http Status || next()
checkAdminExpress = (req,res,next)=>{
    "use strict";
    User.findOne({
        _id:mongoose.Types.ObjectId(atob(req.cookies.token))
    },(err,docs)=>{
        if(err){
            res.status(500)
        }
        else{
            if(docs.admin){
                next();
            }else{
                res.status(403);
            }
        }
    })
};

module.exports = checkAdminExpress;