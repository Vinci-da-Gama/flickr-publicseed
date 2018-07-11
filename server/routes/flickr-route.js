const express = require('express');
const flickrRoute = express.Router();

const flickrCtrl = require('../controllers/flickr-controller');

flickrRoute.get('/publicseed', [flickrCtrl.GetFlickr]);
flickrRoute.get('/search/:term', [flickrCtrl.SearchByText]);

module.exports = flickrRoute;