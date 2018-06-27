var config = require('../config/config');
var request = require('request');


// by pass http get request
module.exports.httpGet = function (req, res, next) {
    request({url: getTargetUrl(req), headers: getHeader(req)}, function (error, response, body) {
        if (error)  console.log(error);
        res.send(body);
    });
};

// by pass http put request
module.exports.httpPut = function (req, res, next) {
    request({url: getTargetUrl(req), headers: getHeader(req), method: 'PUT', json: req.body}, function (error, response, body) {
        if (error)  console.log(error);
        console.log(body);
        res.send(body);
    });
};

// by pass http post request
module.exports.httpPost = function (req, res, next) {
    request({url: getTargetUrl(req), headers: getHeader(req), method: 'POST', json: req.body}, function (error, response, body) {
        if (error)  console.log(error);
        res.send(body);
    });
};

// by pass http delete request
module.exports.httpDelete = function (req, res, next) {
    request({url: getTargetUrl(req), headers: getHeader(req), method: 'DELETE'}, function (error, response, body) {
        if (error)  console.log(error);
        res.send(body);
    });
};

const getHeader = (req) => req.url.indexOf('auth') > -1 ? {} : {'authorization': req.headers.authorization};

// get target api endpoint
const getTargetUrl = function(req) {
    let targetEndPoint = config.API_ENDPOINTS.NODE;
    let uri = (req.baseUrl + req.url).replace("/v1/n", "");
    return "http://" + targetEndPoint + uri;
};
