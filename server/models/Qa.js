const mongoose = require('mongoose');
mongoose.connect(require('../config').database);

const schema = mongoose.Schema({
    locale:{
        type:String,
        required:true,
        default:"en-us"
    },
    question:{
        type:String,
        required:true,
        index:{
            unique:true
        }
    },
    answer:{
        type:String,
        required:false,
        default:null,
    },
    answered:{
        type:Boolean,
        required:false,
        default:false
    },
    created:{
        type:Date,
        default:Date.now()
    }
});

module.exports = mongoose.model('qa',schema);