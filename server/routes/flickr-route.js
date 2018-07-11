const express = require('express');
const flickrRoute = express.Router();

const flickrCtrl = require('../controllers/flickr-controller');

flickrRoute.get('/flickrs', [flickrCtrl.GetFlickr]);
flickrRoute.post('/flickrs/search', [flickrCtrl.GetFlickr]);

module.exports = flickrRoute;