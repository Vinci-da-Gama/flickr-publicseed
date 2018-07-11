module.exports = {
	name: 'default',
    mongodb: {
		name: 'specific_host_dev'
    },
    mongolab: {
		secret: process.env.PRO_SECRETKEY
    },
	email: {
		defaultSender: 'flickr<noreply@flickr.com>',
		SMTP: {
			host: 'email-smtp.us-east-1.amazonaws.com',
			secure: true,
			port: 465,
			auth: {
				user: 'AKIAIFEHC3P3PI33NJTA',
				pass: 'AuUQ5kdAf3KxuGT4hlSYJRroJk4gNT7vpJXXFz4JMu2Y'
			}
		},
		dateFormat: 'dddd, Do MMMM, YYYY',
		timeFormat: 'h:mm a',
		defaultTimezone: 'Australia/Sydney',
		whitelistRegex: '.*'
	},
	redis: null,
	loyalty: {
		referral: null
	},
	ordering: {
		autoApproveOld: false,
		notifyPOS: false,
		resetNumber: false
	},
	kounta: null
};
