const _ = require('lodash');

function _isValidAppVersion(data) {
  const unsupportedVersions = ['1.0.0'];
  return !_.includes(unsupportedVersions, data);
}

exports.validate = (req, res, next) => {
	const version = req.header('x-version');
	if (_.isEmpty(version) || _isValidAppVersion(version)) {
		next();
	} else {
		res.status(412).send('Invalid app version');
	}
};
