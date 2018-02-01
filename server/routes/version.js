const express = require('express');
const router  = express.Router();
const {getLatestCommit,getLatestVersion} = require('../actions/version');

router.get('/latest/commit',getLatestCommit);

router.get('/latest/version',getLatestVersion);

module.exports = router;