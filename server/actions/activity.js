//Import Activity Schema and mongoose
const Activity = require('../models/Activity');
const mongoose = require('mongoose');
//Create an activity
//@method:POST
//@body:name,content,summary,endTime
//@return:JSON Object
createActivity = (req,res)=>{
    "use strict";
    var { name,content,summary,endTime} =  req.body;
    const data = {name, content, summary,date:{endTime},cover:req.file.filename};
    Activity.create(data,(err,docs)=>{
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
//Fetch activity by limit and page no.
//@method:GET
//@query: page,limit
//@return: JSON Object w/ Embed Array
fetchActivity = (req,res)=>{
    "use strict";
    var { page,limit} = req.query;
    Activity.find({},["name","summary","cover"],(err,docs)=>{
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
//Return Activity detail
//@method:GET
//@query: uid
//@return: JSON Object
viewActivity = (req,res)=>{
    "use strict";
    var {uid} = req.query;
    Activity.findOne({
        _id:mongoose.Types.ObjectId(uid)
    },(err,docs)=>{
        if(err){
            res.status(500).json({
                success:false,
                response:err
            })
        }else{
            if(!docs){
                res.status(404).json({
                    success:false,
                    response:"Not Found"
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
//Delete Activity
//@method:DELETE
//@body:uid
//@return:JSON Object
deleteActivity = (req,res)=>{
    "use strict";
    Activity.remove({
        _id:mongoose.Types.ObjectId(req.body.uid)
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
//Export Actions module
module.exports.createActivity = createActivity;
module.exports.fetchActivity = fetchActivity;
module.exports.viewActivity = viewActivity;
module.exports.deleteActivity = deleteActivity;