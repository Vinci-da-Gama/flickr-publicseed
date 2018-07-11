'use strict';

(() => {
	const app = require('./index');
	const debug = require('debug')('flickr-publicseed-test:server');
	const http = require('http');
	const config = require('config');

	const port = normalizePort(process.env.PORT || '3000');
	// const port = normalizePort('8080' || '3000');
	app.set('port', port);

	const httpServer = http.createServer(app);

	httpServer.listen(port);
	console.log('16 -- port: ', port);
	httpServer.on('error', onError);
	httpServer.on('listening', onListening);

	function normalizePort(val) {
		const port = parseInt(val, 10);
		if (isNaN(port)) {
			return val;
		}
		if (port >= 0) {
			return port;
		}
		return false;
	}

	function onError(error) {
		if (error.syscall !== 'listen') {
			throw error;
		}
		const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;
		switch (error.code) {
			case 'EACCES':
				console.error(bind + ' requires elevated privileges');
				process.exit(1);
				break;
			case 'EADDRINUSE':
				console.error(bind + ' is already in use');
				process.exit(1);
				break;
			default:
				throw error;
		}
	}

	function onListening() {
		const addr = httpServer.address();
		const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
		debug('Listening on ' + bind);
	}
})();

