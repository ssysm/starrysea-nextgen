//Import Mongoose and connect to db server
const mongoose = require('mongoose');
mongoose.connect(require('../config').database);
const schema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    summary:{
      type:String,
      required:true
    },
    file:{
        pdf:{
            type:String
        },
        cover:{
            type:String
        },
        images:{
            type:Array
        }
    },
    created:{
        type:Date,
        default:Date.now()
    },
    view:{
        type:Number,
    }
});

module.exports=mongoose.model('work',schema);