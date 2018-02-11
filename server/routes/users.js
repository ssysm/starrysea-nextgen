var express = require('express');
var router = express.Router();
var {checkAdminExpress} = require('../actions/guard');
var {createUser,login,userStatus,deleteUser,getUsers}  = require('../actions/auth');

router.post('/create',checkAdminExpress,createUser);

router.post('/login',login);

router.get('/status',userStatus);

router.get('/all',checkAdminExpress,getUsers);

router.delete('/delete',checkAdminExpress,deleteUser);

module.exports = router;
