const axios = require('axios');
const xmlTojs = require('xml2js').parseString;
const _ = require("lodash");

const response = require('../../helpers/response/handleRes');

const GetFlickr = async(req, res, next) => {
    await axios.get('https://api.flickr.com/services/feeds/photos_public.gne')
        .then(resp => {
            xmlTojs(resp.data, (err, rz) => {
                if (err) {
                    next(err);
                } else {
                    response.handleRes(req, res, rz);
                }
            });
        })
        .catch(err => {
            next(err);
        });
};

// url: https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=edc0dcfb15e1c7b098d7e0e3c19515e8&text=ice&content_type=7&format=json&per_page=20
const SearchByText = async(req, res, next) => {
    const term =  _.trimStart(_.trimEnd(req.params['term']));
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=f93443626f03f1fd6770c89ced795f13&text=${term}&content_type=7&per_page=20`;
    await axios.get(url)
        .then(resp => {
            xmlTojs(resp.data, (err, rz) => {
                if (err) {
                    next(err);
                } else {
                    switch (rz.rsp['$'].stat) {
                        case 'fail':
                            const err = new Error('Api Key is invalid.');
                            next(err);
                            break;
                        case 'ok':
                            response.handleRes(req, res, rz);
                            break;
                        default:
                            break;
                    }
                }
            });
        })
        .catch(err => {
            next(err);
        });
};



module.exports = { GetFlickr, SearchByText };
