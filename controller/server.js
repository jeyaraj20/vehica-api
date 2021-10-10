const express = require('express');
const  mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');
const _ = require('underscore');
// const log = require('./../masters/log');
const db = require('./../masters/db');
const config = require('./../masters/config');

const routes = require('./routes');

// const app = express();
const app = express();app.use(cors());
// app.use(express.static(__dirname + 'dist/Angular6'));


console.log("EXPRESS INITIALIZED");

const enableCORS = function (request, response, next) {
    response.header('Access-Control-Allow-Origin', request.headers.origin);
    response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    response.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Date, X-Date');
    return next();
};

// var requestLog = function (request, response, next) {
//     var details;
//     details = {
//         client: request.ip,
//         method: request.method,
//         url: request.url,
//         headers: request.headers,
//         body: request.body
//     };
//     var tag = "request";
//     console.info({ Function: tag }, details);
//     next();
// };

app.use(enableCORS);
app.use(cors());

var jsonParser = bodyParser.json({ limit: 1024 * 1024 * 20, type: 'application/json' });

var urlencodedParser = bodyParser.urlencoded({
    extended: true,
    limit: 1024 * 1024 * 20,
    type: 'application/x-www-form-urlencoding'
});

app.use(jsonParser);
app.use(urlencodedParser);

console.log("PARSER INITIALIZED");

app.disable('x-powered-by');
// app.use(requestLog);

http.createServer(app).listen(config.http.port, function () {
    console.log("SERVER INITIALIZED");
    console.info({ Function: "init" }, "Server listening for request on port " + config.http.port);
});

app.get("/", function (request, response) {
    console.log("API INITIALIZED");
    console.info('Function: Init', 'Server hit');
    return response.sendStatus(200);
});

app.get("/about", function(req,res){
    res.send('welcome');
})

if (process.send != null) {
    process.send('online');
}

routes.route(app);

process.on('message', function (message) {
    if (message === 'shutdown') {
        log.info({ Function: "shutdown" }, "shutdown message received");
        return process.exit(0);
    }
});
