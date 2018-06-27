var express = require('express');
var router = express.Router();
var controller = require("../controllers/dotnet-server.controller");

router.post('*', controller.httpPost);
router.get('*', controller.httpGet);
router.put('*', controller.httpPut);
router.delete('*', controller.httpDelete);

module.exports = router;
module.exports = router;