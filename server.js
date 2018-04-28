var express = require('express');
var app = express();
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');

var routes = require('./routes');
var conf = require('./conf');


conf.MONGOOSE(mongoose);


conf.MW(app, morgan, bodyParser, cors);


conf.ROUTES(app, routes);


app.listen(conf.PORT, conf.IP);
console.log('Server running on ' + conf.IP + ':' + conf.PORT);
