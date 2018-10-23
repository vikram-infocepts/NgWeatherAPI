const http = require('http');
const app = require('./app');

var env = process.env.NODE_ENV || 'development';
var config = require('./config')[env]; //getting from config for set environment variable

const server = http.createServer(app);

server.listen(config.server.port, () => {
    console.log("Started server listening on port " + config.server.port);
});