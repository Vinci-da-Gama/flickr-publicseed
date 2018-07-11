'use strict';

const http = require('http');
const path = require('path');
const express = require('express');
const favicon = require('serve-favicon');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const winstonExpress = require('express-winston');
const flash = require('connect-flash');
const nunjucks = require('nunjucks');
const config = require('config');

const enableCors = require('../helpers/response/cros');
const logger = require('../helpers/logging');


exports.initApp = (app, express) => {

	app.disable('x-powered-by');

    // *** load environment variables *** //
	require('dotenv').config();

	// *** other view templates *** //
	nunjucks.configure([path.join(__dirname, '../assets/clients')], {
        express: app,
        autoescape: true
    });

	app.use(express.urlencoded({ extended: true, limit: '5mb' }));
	app.use(express.json({ limit: '5mb' }));
	app.use(enableCors);
	app.use(favicon(path.join(__dirname, '../assets/imgs/favicon.ico')));
	app.use(winstonExpress.logger({
		winstonInstance: logger,
		expressFormat: true,
		requestWhitelist: ['url', 'body'],
		bodyBlacklist: ['card', 'password', 'new_password', 'confirm_new_password']
	}));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(cookieParser());
	app.use(flash());

  }
  