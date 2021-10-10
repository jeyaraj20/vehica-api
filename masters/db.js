const mongoose = require('mongoose');
// const log = require('./log');
const config = require('./config');

const dbURI = 'mongodb://' + config.database.host + ':' + config.database.port + '/' + config.database.db;

mongoose.connect(dbURI, { useNewUrlParser: true });

mongoose.connection.on('connected', function () {
    // log.info({ Function: "db" }, 'Mongoose default connection open to ' + dbURI);
});

// If the connection throws an error
mongoose.connection.on('error', function (err) {
    // log.info({ Function: "db" }, 'Mongoose default connection error: ' + err);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
    // log.info({ Function: "db" }, 'Mongoose default connection disconnected');
});

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', function () {
    mongoose.connection.close(function () {
        // log.info({ Function: "db" }, 'Mongoose default connection disconnected through app termination');
        process.exit(0);
    });
});
