var request = require("request");
var querystring = require('querystring');
var url = require('url');
var jwt = require('jsonwebtoken');
var _ = require("lodash");

var integrifyToken = {};


/*
Options Supported:
expiresInMinutes or expiresInSeconds
*/

integrifyToken.getToken = function(key, secret, integrifyURL, username, callback) {
    //create a jwt
    //create JWT
    var aud =  url.resolve(integrifyURL,"/oauth2/token")

    var jwtoptions = {issuer: key, audience: aud, subject:username, role:"user", expiresInMinutes: 60};



    var token = jwt.sign({platform:"node.js"}, secret, jwtoptions);

    var body = {grant_type:"urn:ietf:params:oauth:grant-type:jwt-bearer", assertion: token};

    var ep = url.resolve(integrifyURL,key);

    request.post({url: aud, form: body}, function(err,resp,tokenObj){

        if (err){
            return callback(err);
        }

        if (resp.statusCode != 200){
            return callback("error:" + resp.statusCode);
        }

        callback(null,tokenObj)

    });

}


module.exports = integrifyToken;