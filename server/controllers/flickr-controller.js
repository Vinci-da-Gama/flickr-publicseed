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


const SearchByTerm = async(req, res, next) => {
};



module.exports = {
    GetFlickr,
    SearchByTerm
};
