const axios = require('axios');

getLatestCommit = (req,res)=>{
    axios.get('https://api.github.com/repos/ssysm/starrysea-nextgen/git/refs/heads/master',{
        timeout:1000
    })
        .then((data)=>{
            res.status(200)
                .json({
                    success:true,
                    response:{
                        commit:data.data.object.sha
                    }
                })
        })
        .catch((err)=>{
            res.status(500)
                .json({
                    success:false,
                })
        })
};

module.exports = getLatestCommit;