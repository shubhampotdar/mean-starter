module.exports = {
    IP: process.env.IP || '127.0.0.1',
    PORT: process.env.PORT || 3000,
    MONGOOSE: function(mongoose) {
        mongoose.Promise = global.Promise;
        mongoose.connect('mongodb://127.0.0.1:27017/starter', {
                useMongoClient: true
            })
            .then(function() {
                console.log('Connected to MONGOD !!');
            }).catch(function(err) {
                console.log('Failed to establish connection with MONGOD !!');
                console.log(err.message);
            });
    },
    MW: function(app, morgan, bodyParser, cors) {
        app.use(morgan('dev'));
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({
        	extended: true
        }));
        app.use(cors());
    },
    ROUTES: function(app, routes) {
        routes(app);
        app.get('/*', function(req, res) {
            res.json('404');
        });
    }
};
