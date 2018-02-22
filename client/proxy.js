const express = require('express');
const axios = require('axios');

const renderUri = "http://localhost:8080/render";

const app = express();

app.get('*',(req,res)=>{

  axios.get(`${renderUri}/${req.protocol + '://' + req.get('host') + req.originalUrl}`)
    .then(data=>{
      res.set('Cache-Control','public, max-age=300, s-maxage=600');
      res.send(data.toString());
    })

});


app.listen(4300);
