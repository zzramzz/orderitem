const config = require('./config/');
const http = require('http');
const app = require('./index')

const serverConfig = config.server;

const server = {
    start : function() {
        const server = http.createServer(app);
        server.listen(serverConfig.port);
        console.log(`server running at${serverConfig.port}`);
    }
}

server.start();