/**
 * Created by trusky on 5/7/15.
 */
var integrifytoken = require("./index.js")


integrifytoken.getToken("integrifyinstance","s0nnyD8y",'http://localhost:3000','iapprove', function(err,token){

    if (err) console.log(err);

    console.log(token);

})
