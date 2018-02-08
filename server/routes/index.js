var express = require('express');
var router = express.Router();
var config = require('../config');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('express');
});

router.get('/error/404',(req,res)=>{
    if(config.trustOrigin.includes(req.get("Origin"))){
        res.send('ok')
    }else{
        res.status(403).json({
            success:false,
            file:null
        })
    }
});

module.exports = router;
