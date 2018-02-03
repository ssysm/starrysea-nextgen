const express = require('express');
const router  = express.Router();
const { checkAdminExpress } = require('../actions/guard');
const {createQa,fetchQa,answerQa,deleteQa,fetchAllQa} = require('../actions/qa');
router.get('/',fetchQa);

router.post('/ask',createQa);

router.get('/all',checkAdminExpress,fetchAllQa);

router.patch('/answer',checkAdminExpress,answerQa);

router.delete('/delete',checkAdminExpress,deleteQa);

module.exports = router;