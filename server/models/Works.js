//Import Mongoose and connect to db server
const mongoose = require('mongoose');
mongoose.connect(require('../config').database);
const schema = mongoose.Schema({
    locale:{
        type:String,
        required:true,
        default:"en-US"
    },
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
        required:true
    },
    view:{
        type:Number,
    }
});

module.exports=mongoose.model('work',schema);