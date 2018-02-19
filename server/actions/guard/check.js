const User = require('../../models/User');
const mongoose = require('mongoose');
//Stand Alone Check
//@params:uid
//@return: Boolean
checkAdmin = (uid)=>{
    "use strict";
    User.findOne({
        _id:mongoose.Types.ObjectId(uid)
    },(err,docs)=>{
        if(err) return false;
        else{
            return !!docs.admin;
        }
    })
};

module.exports = checkAdmin;