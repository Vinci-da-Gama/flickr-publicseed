(() => {

    'use strict';

    // *** dependencies *** //
    const express = require('express');
  
    const appConfig = require('./app-config/main-config');
    const routeConfig = require('./app-config/routes-config');
    const errorConfig = require('./app-config/error-config');
  
    // *** express instance *** //
    const expApp = express();
  
    // *** config *** //
    appConfig.initApp(expApp, express);
    routeConfig.initRoutes(expApp);
    errorConfig.initErrorHandler(expApp);
  
    module.exports = expApp;
})();