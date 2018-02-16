const works = require('../../models/Works');
//Fetch work by limit and page no.
//@query: page,limit
//@return: JSON Object w/ Embed Array
fetchWork = (req,res)=>{
    "use strict";
    var { page,limit} = req.query;
    var page = parseInt(page);
    var limit = parseInt(limit);
    works.find({}).sort({created:-1}).exec(["name","summary","file.cover"],(err,docs)=>{
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

module.exports = fetchWork;