var express = require('express');
var cors = require('cors')
var bodyParser = require('body-parser');

const path = require('path');
const http = require('http');

var gatewayRoute = require('./routes/gateway.routes');

var app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(gatewayRoute);

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);


/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));

