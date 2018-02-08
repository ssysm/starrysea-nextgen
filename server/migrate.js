//链接数据库
const mongoose = require('mongoose');
mongoose.connect(require('./config').database);
const User = require('./models/User');
const bcrypt = require('bcrypt-nodejs');
var fs = require('fs');
var path = require('path');
//Encryption
var NodeRSA = require('node-rsa');
var key = new NodeRSA({b:2048});
key.importKey(fs.readFileSync(path.join(__dirname+'/../keys/public.pem'),'utf8'),'pkcs8-public-pem');
key.importKey(fs.readFileSync(path.join(__dirname+'/../keys/private.key'),'utf8'),'pkcs8-private-pem');
encImg = (buffer)=>{
    return key.encrypt(buffer,'base64');
};
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
        console.log("Database Migration Finished");
        process.exit();
    }
});
