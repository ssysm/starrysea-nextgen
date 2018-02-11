const works = require('../models/Works');
const mongoose = require('mongoose');
//Create New Work
//@body:name,summary
createWork = (req,res)=>{
    var {name,summary} = req.body;
    "use strict";
    var data = {
        name,
        summary,
        file:{
            cover:req.files['cover'][0].filename,
            pdf:req.files['pdf'][0].filename,
            images:req.files['images']
        },
        view:0
    };
    works.create(data,(err,docs)=>{
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
//Fetch work by limit and page no.
//@query: page,limit
//@return: JSON Object w/ Embed Array
fetchWork = (req,res)=>{
    "use strict";
    var { page,limit} = req.query;
    var page = parseInt(page);
    var limit = parseInt(limit);
    works.find({},["name","summary","file.cover"],(err,docs)=>{
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
//Return Work detail
//@query: uid
//@return: JSON Object
viewWork = (req,res)=>{
    "use strict";
    var {uid} = req.query;
    works.findOne({
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
//Delete Work
//@method:DELETE
//@body:uid
//@return:JSON Object
deleteWork = (req,res)=>{
    "use strict";
    works.remove({
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

module.exports.createWork = createWork;
module.exports.fetchWork = fetchWork;
module.exports.viewWork = viewWork;
module.exports.deleteWork = deleteWork;