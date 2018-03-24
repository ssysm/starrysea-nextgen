//Import Activity Schema and mongoose
const Activity = require('../../models/Activity');
//Fetch activity by limit and page no.
//@method:GET
//@query: page,limit,locale
//@return: JSON Object w/ Embed Array
fetchActivity = (req,res)=>{
    "use strict";
    var { locale,page,limit} = req.query;
    if(!locale){
        locale = "en-US"
    }
    Activity.find({
        locale
    }).sort({
        "date.created":-1
    }).exec([
        "name","summary","cover"
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

module.exports = fetchActivity;