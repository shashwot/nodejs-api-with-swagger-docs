const app = require('./app');
const http = require('http');
const port = process.env.APPLICATION_PORT || '3000';

const server = http.createServer(app)

server.listen(port, () => {
    console.log(`listening on port on ${port} ` + new Date())
})
server.on('error', onError);

function onError(error) {
    if (error.code === 'EADDRINUSE') {
        console.error( 'Port ' + port + ' is already in use');
        process.exit(1);
    }
    if (error.code === 'EACCES') {
        console.error( 'Requires elevated privileges');
        process.exit(1);
    }
}
