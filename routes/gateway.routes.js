var express = require('express');
var router = express.Router();

var nodeServerRoute = require('./node-server.routes');
var dotnetServerRoute = require('./dotnet-server.routes');

router.use('/v1/n', nodeServerRoute);
router.use('/v1/d', dotnetServerRoute);

module.exports = router;