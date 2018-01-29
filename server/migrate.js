//链接数据库
const mongoose = require('mongoose');
mongoose.connect(require('./config').database);
const User = require('./models/User');
const bcrypt = require('bcrypt-nodejs');
//插入转移信息
const password = 'password';
//转换对象
const data = {
    username:'admin',
    password:bcrypt.hashSync(password)
};
//插入
User.create(data,(err,docs)=>{
    "use strict";
    if(err) throw err;
    else {
        console.log(docs);
        console.log("移植初始化完成");
        process.exit();
    }
});
