const resCode = require('../../consts/responseCode');
const reformatEpi = require('../../helpers/response/reformat');

const ListallFlickr = async (req, res, next) => {
	res.send('get Flickrs...');
};

const CreateFlickr = async (req, res, next) => {
};



module.exports = {
    ListallFlickr,
    CreateFlickr
};