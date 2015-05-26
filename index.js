var request = require("request");
var querystring = require('querystring');
var url = require('url');
var jwt = require('jsonwebtoken');
var _ = require("lodash");

var integrifyToken = {};


/*
Options Supported:
key - your integrify applicatioj key
secret - your integrify secret key
integrifyURL - url of your integrify system
username - the username of the Integrify user to grant the access token to,
expiresInMinutes or expiresInSeconds - expiration for the token amount will be added to th eIAPT attribute of this JWT
*/

// server - server token flow
// this server creates a JWT and directly exchanges it for an access token
integrifyToken.getTokenFromJWT = function(options, callback) {

    var aud =  url.resolve(options.url,"/oauth2/token")

    //expire in 60 minutes by default
    var jwtoptions = {issuer: options.key, audience: aud, subject:options.username, role:"user", expiresInMinutes: 60};
    if (options.expiresInMinutes) {
        jwtoptions.expiresInMinutes = options.expiresInMinutes;
    }
    if (options.expiresInSeconds) {
        delete jwtoptions.expiresInMinutes;
        jwtoptions.expiresInSeconds = options.expiresInSeconds;
    }

    var token = jwt.sign({platform:"node.js"}, options.secret, jwtoptions);

    var body = {grant_type:"urn:ietf:params:oauth:grant-type:jwt-bearer", assertion: token};


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