var express = require('express');
var router = express.Router();
var {checkAdminExpress} = require('../actions/guard');
var {createUser,login,userStatus}  = require('../actions/auth');

router.post('/create',checkAdminExpress,createUser);

router.post('/login',login);

router.get('/status',userStatus);

module.exports = router;
