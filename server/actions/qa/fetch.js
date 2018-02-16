const Qa = require('../../models/Qa');
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

module.exports = fetchQa;