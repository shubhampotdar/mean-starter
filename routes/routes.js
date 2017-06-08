var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var hat = require('hat');
var bcrypt = require('bcryptjs');
var request = require('request');
//var Routes = require('../models/routes');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));


app.get('/', function (req, res) {
	res.json('routes');
});


module.exports = app;
