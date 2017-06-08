module.exports = function (app) {

	// Require Routes
	var routes = require('./routes/routes');

	// Use Routes
	app.use('/routes', routes);
};
