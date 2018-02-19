const Qa = require('../../models/Qa');
//@method:POST
//@body:question
//@return:JSON Object
createQa = (req,res)=>{
    var { question } = req.body;
    Qa.create({question},(err,docs)=>{
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

module.exports = createQa;