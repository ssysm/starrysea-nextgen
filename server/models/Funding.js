const mongoose = require('mongoose');
mongoose.connect(require('../config').database);

const schema = mongoose.Schema({
    activity_id:{
        type:String,
        required:true
    },
    record:[{
        name:{
            type:String,
        },
        amount:{
            type:Number,
        },
        message:{
            type:String
        }
    }]
});

module.exports = mongoose.model('funding',schema);