/*jshint esversion: 6 */
const _ = require("lodash");

exports.RefineFlickrImagesArray = (payload) => {
    const imgs = [];

    _.forEach(payload, (elem, idx) => {
        if (elem.link[1]['$'].href) {
            const imgObj = {
                imgPath: (elem.link[1]['$'].href.includes('.jpg'))? elem.link[1]['$'].href : 'https://www.designontextile.com/js/awant/design/core_img/no_image_available.256.png'
            };
            imgs.push(imgObj);
        }
    });

    return imgs;
};

exports.RefineSearchPhotos = (payload) => {
    const photos = [];

    if (payload !== undefined && payload.length > 0) {
        _.forEach(payload, (elem) => {
            // sample url ==> https://farm1.staticflickr.com/834/29470570898_316ba75f36.jpg --> 1: farm, 834: server, 29470570898: id, 316ba75f36: secret
            const photoObj = {
                imgPath: `https://farm${elem['$'].farm}.staticflickr.com/${elem['$'].server}/${elem['$'].id}_${elem['$'].secret}.jpg`
            };
            photos.push(photoObj);
        });
    }

    return photos;

};