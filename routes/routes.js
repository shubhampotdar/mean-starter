var express = require('express');
var app = express();


app.get('/', require('../controllers/routes/routes'));


module.exports = app;
