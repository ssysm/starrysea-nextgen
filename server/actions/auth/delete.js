const User = require('../../models/User');
const mongoose = require('mongoose');
//Delete User
//@body:uid
//@return: JSON Object
deleteUser = (req,res)=>{
    var {uid} = req.body;
    User.remove({
        _id:mongoose.Types.ObjectId(uid)
    },(err,docs)=>{
        if(err){
            res.status(500).json({
                success:false,
                response:err
            })
        }else {
            res.status(200).json({
                success: true,
                response: docs
            })
        }
    })
};

module.exports = deleteUser;