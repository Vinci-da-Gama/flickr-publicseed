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
            const photoObj = {
                farm: elem['$'].farm,
                server: elem['$'].server,
                id: elem['$'].id,
                secret: elem['$'].secret
            };
            photos.push(photoObj);
        });
    }

    return photos;

};

exports.trimTerm = (term) => {
    return _.trimStart(_.trimEnd(term));
};