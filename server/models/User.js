const mongoose = require('mongoose');
mongoose.connect(require('../config').database);
const schema = mongoose.Schema({
    username:{
        type:String,
        required:true,
        index:{
            unique:true
        }
    },
    password:{
        type:String,
        required:true,
    },
    admin:{
        type:Boolean,
        default:true
    }
});

module.exports = mongoose.model('user',schema);