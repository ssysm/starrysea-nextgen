var config = require('../config');
var fs = require('fs');
var path = require('path');
//Encryption
var NodeRSA = require('node-rsa');
var key = new NodeRSA({b:2048});
key.importKey(fs.readFileSync(path.join(__dirname+'/../../keys/public.pem'),'utf8'),'pkcs8-public-pem');
key.importKey(fs.readFileSync(path.join(__dirname+'/../../keys/private.key'),'utf8'),'pkcs8-private-pem');
ping = (req,res)=>{
    res.send('express');
};

errorImg = (req,res)=>{
    if(config.trustOrigin.includes(req.get("Origin"))){
        fs.readdir(path.join('public/cucuEnc/'),(err,files)=>{
            var item = files[Math.floor(Math.random()*files.length)];
            var bitmap = fs.readFileSync(path.join(__dirname+'/../public/cucuEnc/'+item),'utf8');
            res.send(key.decrypt(bitmap,'base64'));
        });
    }else{
        res.status(403).json({
            success:false,
            file:null
        })
    }
};

module.exports.ping = ping;
module.exports.errorImg = errorImg;