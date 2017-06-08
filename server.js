var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');
var rfs = require('rotating-file-stream');
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var conf = require('./conf');


conf.MONGOOSE(mongoose);


conf.MW(app, morgan, path, fs, rfs, cors);


conf.ROUTES(app);


app.listen(conf.PORT, conf.IP);
console.log('Server running on ' + conf.IP + ':' + conf.PORT);
