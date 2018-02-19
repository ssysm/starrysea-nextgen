const Qa = require('../../models/Qa');
//Fetch All Qa(s) by limit and page no.
//@method:GET
//@query:page,limit
//@return: JSON Object || JSON Array
fetchAllQa = (req,res)=>{
    var { page,limit} = req.query;
    Qa.find({},[],(err,docs)=>{
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

module.exports = fetchAllQa;