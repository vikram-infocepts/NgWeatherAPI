const http = require('http');
const app = require('./app');

var env = process.env.NODE_ENV || 'development';
var config = require('./config')[env];

const server = http.createServer(app);

server.listen(config.server.port, () => {
    console.log("Server is listening on port " + config.server.port);
});