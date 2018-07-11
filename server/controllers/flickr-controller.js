const axios = require('axios');
var xmlTojs = require('xml2js').parseString;

const resCode = require('../../consts/responseCode');
const reformat = require('../../helpers/response/reformat');

const GetFlickr = async(req, res, next) => {
    await axios.get('https://api.flickr.com/services/feeds/photos_public.gne')
        .then(resp => {
            xmlTojs(resp.data, function(err, rz) {
                if (err) {
                    next(err);
                } else {
                    res.json({
                        data: reformat.RefineFlickrImagesArray(rz.feed.entry),
                        success: true,
                        responseCode: resCode.success
                    });
                }
            });
        })
        .catch(err => {
            next(err);
        });
};

// url: https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=edc0dcfb15e1c7b098d7e0e3c19515e8&text=ice&content_type=7&format=json&per_page=20
const SearchByText = async(req, res, next) => {
    const term = reformat.trimTerm(req.params['term']);
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=edc0dcfb15e1c7b098d7e0e3c19515e8&text=${term}&content_type=7&per_page=20`;
    await axios.get(url)
        .then(resp => {
            xmlTojs(resp.data, function(err, rz) {
                if (err) {
                    next(err);
                } else {
                    res.json({
                        // return img urls collection
                        data: reformat.RefineSearchPhotos(rz.rsp.photos[0].photo),
                        success: true,
                        responseCode: resCode.success
                    });
                }
            });
        })
        .catch(err => {
            next(err);
        });
};



module.exports = { GetFlickr, SearchByText };
