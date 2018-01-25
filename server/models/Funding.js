const mongoose = require('mongoose');
mongoose.connect(require('../config').database);

const schema = mongoose.Schema({
    activity_id:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    message:{
        type:String
    }
});

module.exports = mongoose.model('funding',schema);