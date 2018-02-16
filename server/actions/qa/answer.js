const Qa = require('../../models/Qa');
const mongoose = require('mongoose');
//Answer A Question
//@method:PATCH
//@body:answer,uid
//@return: JSON Object
answerQa = (req,res)=>{
    var { answer,uid } = req.body;
    Qa.update({
        _id:mongoose.Types.ObjectId(uid)
    },{
        answer:answer,
        answered:true
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

module.exports = answerQa;