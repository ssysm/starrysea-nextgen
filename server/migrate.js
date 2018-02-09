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
fs.readdir(path.join(__dirname+'/etc/cucuImg/'),(err,files)=>{
    for(var i = 0;i < files.length ;i++){
        var item = fs.readFileSync(path.join(__dirname+'/etc/cucuImg/'+files[i]));
        var encData = encImg(new Buffer(item));
        fs.writeFileSync(path.join(__dirname+'/public/cucuEnc/'+files[i]+'.enc'),encData);
        console.log("encrypted: No."+i);
    }
});
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
