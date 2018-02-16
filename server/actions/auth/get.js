const User = require('../../models/User');
//Get All Users
//@return: JSON Array;
getUsers = (req,res)=>{
    User.find({},["username","admin"],(err,docs)=>{
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

module.exports = getUsers;