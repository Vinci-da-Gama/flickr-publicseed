module.exports = {
	name: 'default',
	mongodb: {
		name: 'specific_host_dev'
	},
	mongolab: {
		secret: process.env.PRO_SECRETKEY
	}
};
