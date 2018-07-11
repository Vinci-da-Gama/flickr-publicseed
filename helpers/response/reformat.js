/*jshint esversion: 6 */
const xmlTojson = require('xml2json');

exports.RefineFlickrResult = (payload) => {
    const relay = xmlTojson.toJson(payload);
    console.log('6 -- ', relay);
    return relay;
};