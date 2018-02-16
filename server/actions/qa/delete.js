const Qa = require('../../models/Qa');
const mongoose = require('mongoose');
//Delete A Question
//@method:DELETE
//@body:uid
//@return: JSON Object
deleteQa = (req,res)=>{
    var {uid} = req.body;
    Qa.remove({
        _id:mongoose.Types.ObjectId(uid)
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
module.exports = deleteQa;