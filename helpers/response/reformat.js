/*jshint esversion: 6 */
const _ = require("lodash");

exports.RefineFlickrImagesArray = (payload) => {
    const imgs = [];

    _.forEach(payload, (elem, idx) => {
        if (elem.link[1]['$'].href) {
            const imgObj = {
                imgHref: elem.link[1]['$'].href
            };
            imgs.push(imgObj);
        }
    });

    return imgs;
};

exports.RefineSearchPhotos = (payload) => {
    const photos = [];

    if (payload.length > 0) {
        _.forEach(payload, (elem) => {
            // sample url ==> https://farm1.staticflickr.com/834/29470570898_316ba75f36.jpg --> 1: farm, 834: server, 29470570898: id, 316ba75f36: secret
            const photoObj = {
                imgHref: `https://farm${elem['$'].farm}.staticflickr.com/${elem['$'].server}/${elem['$'].id}_${elem['$'].secret}.jpg`
            }
            photos.push(photoObj);
        });
    }

    return photos;

};