const works = require('../../models/Works');
//Create New Work
//@body:name,summary
createWork = (req,res)=>{
    var {locale,name,summary} = req.body;
    "use strict";
    var imageArr = [];
    for(let img of req.files['images']){
        imageArr.push({filename:img.filename});
    }
    var data = {
        locale,
        name,
        summary,
        created:Date.now(),
        file:{
            cover:req.files['cover'][0].filename,
            pdf:req.files['pdf'][0].filename,
            images:imageArr
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

module.exports = createWork;