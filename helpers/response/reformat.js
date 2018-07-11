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