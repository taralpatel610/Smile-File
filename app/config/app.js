const express = require('express'),
app = express(),
routes = require('./routes')

//routes
app.use('/', routes)

module.exports = app;