const express = require('express')
const router = express.Router()
const path = require('path')
//home page
router.get('/', function(req, res) {
	res.sendFile('/index.html', {root: "./app"})
});

module.exports = router;