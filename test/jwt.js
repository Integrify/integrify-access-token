var should = require("should")
var integrifytoken = require("../index.js")


describe('Access Token', function() {

    var options = require("./options.json");
    var accToken = {};
    before(function(done) {
        integrifytoken.getTokenFromJWT(options, function(err,token){
            if (!err){
                accToken = JSON.parse(token);
            }
            if (err) return done(new Error(err));
            return done()
        })
    });


    describe('getTokenFromJWT', function () {
        //console.log(token)
        it ('should get a token without an error', function(done) {
            accToken.should.have.property('access_token');
            accToken.should.have.property('token_type');
            accToken.token_type.should.be.exactly("Bearer");
            accToken.should.have.property('expires_in');
                done();

            //});

        })
    });
});