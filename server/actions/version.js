const axios = require('axios');

getLatestCommit = (req,res)=>{
    axios.get('https://api.github.com/repos/ssysm/starrysea-nextgen/git/refs/heads/master')
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
                    response:err
                })
        })
};

getLatestVersion = (req,res)=>{
    axios.get('https://api.github.com/repos/ssysm/starrysea-nextgen/releases/latest')
        .then((data)=>{
            res.status(200)
                .json({
                    success:true,
                    response:{
                        tag_name:data.data.tag_name,
                        prerelease:data.data.prerelease
                    }
                })
        })
};

module.exports.getLatestCommit = getLatestCommit;
module.exports.getLatestVersion = getLatestVersion;