#integrify-access-token

### Simple module for requesting an access token using a JWT

### Installation:

```
npm install integrify-acccess-token (soon...)
```


### Usage

```
var integrify-access-token = require('integrify-access-token');
integrify-access-token.getToken("MyAPIKey","MySecret",'http://your.integrify.com','validusername', function(err,tokenObj) {
    
    if (err) console.log(err);

    console.log(tokenObj);
    //=> {"access_token":"427963b145074c7c868f346efb61d204","token_type":"Bearer","expires_in":3600}
});
```
