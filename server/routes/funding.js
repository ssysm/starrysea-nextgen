const express = require('express');
const router = express.Router();
const { checkAdminExpress } = require('../actions/guard');
const { createFundRecord,deleteFundRecord,fetchFundById} = require('../actions/funding');

router.get('/activity',fetchFundById);

router.post('/create',checkAdminExpress,createFundRecord);

router.delete('/delete',checkAdminExpress,deleteFundRecord);

module.exports = router;