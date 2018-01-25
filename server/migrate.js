const mongoose = require('mongoose');
mongoose.connect(require('./config').database);
const User = require('./models/User');
const bcrypt = require('bcrypt-nodejs');
const data = {
    username:'admin',
    password:bcrypt.hashSync('password')
};
User.create(data,(err,docs)=>{
    "use strict";
    if(err) throw err;
    else {
        console.log(docs);
        console.log("移植初始化完成，请退出");
        return true;
    }
});