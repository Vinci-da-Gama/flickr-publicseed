const express = require('express');
const flickrRoute = express.Router();

const flickrCtrl = require('../controllers/flickr-controller');

flickrRoute.get('/flickrs-echo', [flickrCtrl.ListallFlickr]);
flickrRoute.post('/flickrs', [flickrCtrl.CreateFlickr]);

module.exports = flickrRoute;