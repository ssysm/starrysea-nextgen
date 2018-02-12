const express = require('express');
const router = express.Router();
const multer  = require('multer');
const mime = require('mime');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        var dest = 'public/work/';
        cb(null, dest)
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now()+'-'+Math.floor(Math.random()*1000)+'.'+mime.getExtension(file.mimetype));
    }
});
const upload = multer({ storage: storage });
const workUpload = upload.fields([
    { name: 'cover', maxCount: 1 },
    { name: 'pdf', maxCount:1},
    { name: 'images', maxCount: 32 }
    ]);
const { checkAdminExpress } = require('../actions/guard');
const { createWork,fetchWork,viewWork,deleteWork }  = require('../actions/works');

router.get('/',fetchWork);

router.post('/',checkAdminExpress,workUpload,createWork);

router.get('/detail',viewWork);

router.delete('/delete',checkAdminExpress,deleteWork);

module.exports=router;