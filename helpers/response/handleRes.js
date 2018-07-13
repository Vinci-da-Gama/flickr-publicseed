/*jshint esversion: 6 */
const _ = require("lodash");

const resCode = require('../../consts/responseCode');
const reformat = require('./reformat');

exports.handleRes = (req, res, result) => {
    const term = _.trim(req.params.term);
    if (term !== '') {
        res.json({
            // return img urls collection -- reformat.RefineSearchPhotos(result.rsp.photos[0].photo)
            // sometimes, API (flickr.photos.search) will not return photos, need new Api Key
            data: reformat.RefineSearchPhotos(result),
            success: true,
            responseCode: resCode.success
        });
    } else {
        res.json({
            data: reformat.RefineFlickrImagesArray(result.feed.entry),
            success: true,
            responseCode: resCode.success
        });
    }
}