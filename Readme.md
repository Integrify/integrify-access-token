#integrify-access-token

### Simple module for requesting an access token

### Installation:

```
npm install integrify-acccess-token (soon...)
```


### Usage

```
var integrify-access-token = require('integrify-access-token');
var options = {key:"MyyAppKey",secret:"MySecret",url:"https://my.integrify.com",username:"MyUserName",expiresInMinutes: 60}
integrify-access-token.getTokenFromJWT(options,function(err,tokenObj) {
    
    if (err) console.log(err);

    console.log(tokenObj);
    //=> {"access_token":"427963b145074c7c868f346efb61d204","token_type":"Bearer","expires_in":3600}
});
```
