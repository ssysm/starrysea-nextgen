const axios = require('axios');
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
        .catch((err)=>{
            res.status(500)
                .json({
                    success:false
                })
        })
};

module.exports = getLatestVersion;