const mongoose = require('mongoose');
mongoose.connect(require('../config').database);

const schema = mongoose.Schema({
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