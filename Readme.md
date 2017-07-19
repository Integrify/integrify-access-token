#integrify-access-token

### Simple module for requesting an access token

*** NOTE: Requires Integrify version  65.150.6001.001 or later

### Installation:

```
npm install integrify-acccess-token 
```


### Usage

```
var integrify-access-token = require('integrify-access-token');
var options = {key:"MyyAppKey",secret:"MySecret",url:"https://my.integrify.com",username:"MyUserName"}
integrify-access-token.getTokenFromJWT(options,function(err,tokenObj) {
    
    if (err) console.log(err);

    console.log(tokenObj);
    //=> {"access_token":"427963b145074c7c868f346efb61d204","token_type":"Bearer"}
});
```
