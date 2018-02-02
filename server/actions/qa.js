const Qa = require('../models/Qa');
const mongoose = require('mongoose');
//Create A Question Ticket
//@method:POST
//@body:question
//@return:JSON Object
createQa = (req,res)=>{
    var { question } = req.body;
    Qa.create({question},(err,docs)=>{
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
//Fetch A QA set by limit and page no.
//@method:GET
//@query:page,limit
//@return: JSON Object || JSON Array
fetchQa = (req,res)=>{
    var { page,limit} = req.query;
    Qa.find({answered:true},[],(err,docs)=>{
        if(err){
            res.status(500).json({
                success:false,
                response:err
            })
        }else{
            const result = docs.slice(limit*(page-1),limit*(page-1)+limit);
            res.status(200).json({
                success:true,
                response:result
            })
        }
    })
};
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
module.exports.createQa = createQa;
module.exports.fetchQa = fetchQa;
module.exports.answerQa = answerQa;
module.exports.deleteQa = deleteQa;
