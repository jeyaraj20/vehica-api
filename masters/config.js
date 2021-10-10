// const log = require('./log');
const _ = require('underscore');

process.env.NODE_ENV = 'production';

var env_var;

if (process.env.NODE_ENV == 'development') {
    env_var = require('./../config/dev');
    // log.info({ Function: "Config.Init" }, 'Registering services with development configurations');
}
else if (process.env.NODE_ENV == 'testing') {
    env_var = require('./../config/test');
    // log.info({ Function: "Config.Init" }, 'Registering services with testing configurations');
}
else if (process.env.NODE_ENV == 'production') {
    env_var = require('./../config/prod');
    // log.info({ Function: "Config.Init" }, 'Registering services with production configurations');
}
else {
    // log.info({ Function: "Config.Init" }, 'Emvironment variable is not set');
    return process.exit(0);
}

var config = _.extend(env_var);

module.exports = config;