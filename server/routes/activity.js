const express = require('express');
const router = express.Router();
const multer  = require('multer');
const mime = require('mime');
const path = require('path');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname+'/../public/activity'))
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now()+'-'+Math.floor(Math.random()*1000)+'.'+mime.getExtension(file.mimetype));
    }
});
const upload = multer({ storage: storage });
const { checkAdminExpress } = require('../actions/guard');
const { createActivity,fetchActivity,viewActivity,deleteActivity }  = require('../actions/activity');

router.get('/',fetchActivity);

router.post('/',checkAdminExpress,upload.single('cover'),createActivity);

router.get('/detail',viewActivity);

router.delete('/delete',checkAdminExpress,deleteActivity);

module.exports = router;