const express = require('express');
const router  = express.Router();
const { checkAdminExpress } = require('../actions/guard');
const {createQa,fetchQa,answerQa,deleteQa} = require('../actions/qa');
router.get('/',fetchQa);

router.post('/ask',createQa);

router.patch('/answer',checkAdminExpress,answerQa);

router.delete('/delete',checkAdminExpress,deleteQa);

module.exports = router;