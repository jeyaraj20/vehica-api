// const bunyan = require('bunyan');
// const PrettyStream = require('bunyan-prettystream');

// const prettyStdOut = new PrettyStream();

// prettyStdOut.pipe(process.stdout);

// const streams = [
//     {
//         type: 'rotating-file',
//         path: __dirname + '/log/nsm.log', // File path where to track logs
//         period: '1d',   // daily rotation
//         count: 7        // keep 3 back copies
//     },
//     {
//         stream: prettyStdOut
//     }
// ];
// const sourceView = true;

// const log = bunyan.createLogger({
//     name: "MotoServe",
//     streams: streams,
//     src: sourceView
// });

// module.exports = log;
