const User = require('../models/User');
const bcrypt = require('bcrypt-nodejs');
const btoa = require('btoa');
const atob = require('atob');
const mongoose = require('mongoose');
//Create New User
//@body: username,password
//@return: JSON Object
createUser = (req,res)=>{
    "use strict";
    const data = {
        username:req.body.username,
        password:bcrypt.hashSync(req.body.password)
    };
    User.create(data,(err,docs)=>{
        if(err){
            res.status(500).json({
                success:false,
                response:err
            })
        }else{
            res.status(200).json({
                success:true,
                response:{
                    _id:docs._id
                }
            })
        }
    })
};
//Login User
//@body:username,password
//@return: JSON Object ? @cookie:token
login = (req,res)=>{
    "use strict";
    User.findOne({
        username:req.body.username
    },(err,docs)=>{
        if(err){
            res.status(500).json({
                success:err,
                response:docs
            })
        }else{
            if(!docs || !bcrypt.compareSync(req.body.password,docs.password)){
                res.status(401).json({
                    success:false,
                    response:"No Match Record"
                })
            }else{
                res.status(200).cookie('token',btoa(docs._id)).json({
                    success:true
                })
            }
        }
    })
};
//Check A User's login status base on the cookie
//@cookie:token
//@return: Http status code || JSON Object
userStatus = (req,res)=>{
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
};

module.exports.createUser = createUser;
module.exports.login = login;
module.exports.userStatus = userStatus;