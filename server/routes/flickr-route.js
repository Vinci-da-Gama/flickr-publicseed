const express = require('express');
const flickrRoute = express.Router();

const flickrCtrl = require('../controllers/flickr-controller');

flickrRoute.get('/flickrs-echo', [flickrCtrl.ListallFlickr]);
flickrRoute.get('/flickrs', [flickrCtrl.GetFlickr]);

module.exports = flickrRoute;