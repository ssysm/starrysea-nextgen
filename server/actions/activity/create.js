//Import Activity Schema and mongoose
const Activity = require('../../models/Activity');
const Funding = require('../../models/Funding');
//Create an activity
//@method:POST
//@body:name,content,summary,endTime
//@return:JSON Object
createActivity = (req,res)=>{
    "use strict";
    var { locale,name,content,summary,endTime} =  req.body;
    const data = {locale,name, content, summary,date:{created:Date.now(),endTime},cover:req.file.filename};
    Activity.create(data,(err,docs)=>{
        if(err){
            res.status(500).json({
                success:false,
                response:err
            })
        }else{
            Funding.create({
                activity_id:docs._id
            },(err2,fund)=>{
                if(err2){
                    res.status(500).json({
                        success:false,
                        response:err2
                    })
                }
                else{
                    res.status(200).json({
                        success:true,
                        response:{
                            q1:docs,
                            q2:fund
                        }
                    })
                }
            })
        }
    })
};

module.exports = createActivity;