//Import Mongoose and connect to db server
const mongoose = require('mongoose');
mongoose.connect(require('../config').database);
//Init Schema
const schema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        required:true
    },
    cover:{
        type:String,
        required:true
    },
    summary:{
        type:String,
        required:true
    },
    date:{
        created:{
            type:Date,
            required:true
        },
        endTime:{
            type:Date,
            required:true
        }
    }
});
//Export schema as a module
module.exports = mongoose.model('activity',schema);