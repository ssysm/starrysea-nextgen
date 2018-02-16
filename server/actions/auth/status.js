const User = require('../../models/User');
const atob = require('atob');
const mongoose = require('mongoose');
//Check A User's login status base on the cookie
//@cookie:token
//@return: Http status code || JSON Object
userStatus = (req,res)=>{
    if(req.cookies.token){
        User.findOne({
            _id:mongoose.Types.ObjectId(atob(req.cookies.token))
        },["username","admin"],(err,docs)=>{
            if(err){
                res.status(500).json({
                    success:false,
                    response:err
                })
            }else{
                if(!docs){
                    res.status(401).json({
                        success:false,
                        response:"No Match Record"
                    })
                }else{
                    res.status(200).json({
                        success:true,
                        response:docs
                    })
                }
            }
        })
    }else{
        res.status(401)
            .json({
                success:false,
                response:"no cookie"
            })
    }

};

module.exports = userStatus;