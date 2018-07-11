exports.initRoutes = (app) => {
    'use strict';
    
    const routeStr = require('../consts/route-str');

    const allRoutes = require('../server/routes/index');
    const flickrRoute = require('../server/routes/flickr-route');

    allRoutes.initAllRoutes(app);

    // *** flickr routes *** //
    app.use(routeStr.baseUrl, flickrRoute);
};