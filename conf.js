module.exports = {
	IP: process.env.IP || '127.0.0.1',
	PORT: process.env.PORT || 3000,
	MONGOOSE: function (mongoose) {
		mongoose.Promise = global.Promise;
		//var connection_string = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
		//	process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
		//	process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
		//	process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
		//	process.env.OPENSHIFT_APP_NAME;
		//mongoose.connect('mongodb://' + connection_string)
		mongoose.connect('mongodb://127.0.0.1:27017/optimus')
			.then(function () {
				console.log('Connected to MONGOD !!');
			}).catch(function (err) {
				console.log('Failed to establish connection with MONGOD !!');
				console.log(err.message);
			});
	},
	MW: function (app, morgan, path, fs, rfs, cors) {
		var logDirectory = path.join(__dirname, 'log');
		fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);
		var accessLogStream = rfs('access.log', {
			interval: '1d',
			path: logDirectory
		});
		app.use(morgan('common', {
			stream: accessLogStream
		}));
		app.use(morgan('dev'));
		app.use(cors());
	},
	ROUTES: function (app) {
		var routes = require('./routes');
		routes(app);
		app.get('/*', function (req, res) {
			res.json('hello');
		});
	}
};
