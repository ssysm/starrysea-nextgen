var express = require('express');
var router = express.Router();
var { ping,errorImg }  = require('../actions/index');
/* GET home page. */
router.get('/', ping);

router.get('/errorImg',errorImg);

module.exports = router;
