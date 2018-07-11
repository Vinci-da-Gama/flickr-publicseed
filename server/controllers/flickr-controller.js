const axios = require('axios');

const resCode = require('../../consts/responseCode');
const reformat = require('../../helpers/response/reformat');

const ListallFlickr = async (req, res, next) => {
	res.json({
		hi: 'hi'
	});
};

const GetFlickr = (req, res, next) => {
    axios.get('https://api.flickr.com/services/feeds/photos_public.gne')
        .then(resp => {
            const jsonData = reformat.RefineFlickrResult(resp.data);
            res.json({
                data: jsonData,
                success: true,
                responseCode: resCode.success
            });
        })
        .catch(err => {
            next(err);
        });
};



module.exports = {
	ListallFlickr,
	GetFlickr
};
