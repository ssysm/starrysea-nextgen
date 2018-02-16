const User = require('../../models/User');
const bcrypt = require('bcrypt-nodejs');
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
module.exports = createUser;