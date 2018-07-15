const axios = require('axios');
const xmlTojs = require('xml2js').parseString;
const _ = require("lodash");

const response = require('../../helpers/response/handleRes');
const errMsg = require('../../consts/errMessages');

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
    const url = `https://api.flickr.com/services/rest/?sort=relevance&method=flickr.photos.search&api_key=1d75d8ab7bd0ed4e28a701f8d5e4dd73&text=${term}&content_type=7&per_page=20`;
    await axios.get(url)
        .then(resp => {
            xmlTojs(resp.data, (err, rz) => {
                if (err) {
                    next(err);
                } else {
                    switch (rz.rsp['$'].stat) {
                        case 'fail':
                            const err = new Error(errMsg.INVALIDAIP);
                            next(err);
                            break;
                        case 'ok':
                            if (rz.rsp.photos[0].hasOwnProperty('photo')) {
                                response.handleRes(req, res, rz.rsp.photos[0].photo);
                            } else {
                                const err = new Error(errMsg.NOPHOTOSRETURNED);
                                err.status = 404;
                                next(err);
                            }
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
