exports.initAllRoutes = (app) => {

	'use strict';
	const _ = require('lodash');
	const appVersion = require('../../helpers/validatiors/appversion');
	// const geolocation = require('../../helpers/validatiors/geolocation');
	const fs = require('fs');

	app.all('/app/*', [appVersion.validate]);

}
