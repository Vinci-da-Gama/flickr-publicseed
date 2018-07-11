const resCode = require('../consts/responseCode');

exports.initErrorHandler = (app) => {
	
	'use strict';

	// catch 404 and forward to error handler
	app.use(function(req, res, next) {
		const err = new Error('Not Found');
		err.status = 404;
		next(err);
	});

	// error handler (no stacktraces leaked to user)
	app.use(function(err, req, res, next) {
		res.status(err.status || 500);
		// development error handler (will print stacktrace)
		res.json({
			status: err.status ? err.status : '500',
			message: err.message,
			responseCode: resCode.failed
		});
	});
}
  