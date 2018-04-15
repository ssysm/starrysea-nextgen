const works = require('../../models/Works');
//Fetch work by limit and page no.
//@query: page,limit,locale
//@return: JSON Object w/ Embed Array
fetchWork = (req,res)=>{
    "use strict";
    var { locale,page,limit} = req.query;
    var page = parseInt(page);
    var limit = parseInt(limit);
    var locale = locale.toLowerCase();
    if(!req.query.locale){
        locale = "en-us"
    }
    works
        .find({
            locale
        })
        .sort({
            "date.created": -1
        })
        .skip(limit * (page - 1))
        .limit(limit * (page - 1) + limit)
        .exec([
            "name", "summary", "file.cover"
        ], (err, docs) => {
            if (err) {
                res.status(500).json({
                    success: false,
                    response: err
                })
            } else {
                res.status(200).json({
                    success: true,
                    response: docs
                })
            }
        })
};

module.exports = fetchWork;