const works = require('../../models/Works');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
//Delete Work
//@method:DELETE
//@body:uid
//@return:JSON Object
deleteWork = (req,res)=>{
    "use strict";
    works.findOne({
        _id:mongoose.Types.ObjectId(req.body.uid)
    },(err2,docs2)=>{
        if(err2){console.log(err2)}
        fs.unlinkSync(path.join(__dirname+'/../../public/work/'+docs2.file.cover));
        fs.unlinkSync(path.join(__dirname+'/../../public/work/'+docs2.file.pdf));
        for(let obj of docs2.file.images){
            fs.unlinkSync(path.join(__dirname+'/../../public/work/'+obj.filename));
        }
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
    });

};

module.exports = deleteWork;