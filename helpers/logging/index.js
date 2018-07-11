const winston = require('winston');
const winstonLoggly = require('winston-loggly-bulk');
const config = require('config');

const logger = winston.createLogger({
    transports: [
        new winston.transports.File({
            level: 'info',
            filename: './logs/all-logs.log',
            handleExceptions: true,
            humanReadableUnhandledException: true,
            json: true,
            maxsize: 5242880, // 5MB
            maxFiles: 5,
            colorize: true,
            timestamp: true
        }),
        new winston.transports.Console({
            level: 'debug',
            handleExceptions: true,
            humanReadableUnhandledException: true,
            json: false,
            colorize: true,
            timestamp: true
        })
    ],
    exitOnError: false
});

module.exports = logger;
module.exports.stream = {
    write: (message, encoding) => {
        console.log('\n\n33 -- logging/index logout: ', message);
        console.log('\n\n');
        logger.info(message);
    }
};
