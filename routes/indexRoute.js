const express = require("express");
const { getSlackName } = require('../controllers/indexController')
const router = express.Router();

router.get('/slackname', getSlackName)

module.exports = router