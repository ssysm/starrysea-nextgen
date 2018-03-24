const works = require('../../models/Works');
//Fetch work by limit and page no.
//@query: page,limit,locale
//@return: JSON Object w/ Embed Array
fetchWork = (req,res)=>{
    "use strict";
    var { locale,page,limit} = req.query;
    var page = parseInt(page);
    var limit = parseInt(limit);
    if(!req.query.locale){
        locale = "en-US"
    }
    works.find({
        locale
    }).sort({
        created:-1
    }).exec([
        "name","summary","file.cover"
    ],(err,docs)=>{
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