var request = require("request");
var settings = require("./settings.json");

var options = {
    method: 'POST',
    url: 'https://login.microsoftonline.com/' + settings.tenant + '/oauth2/v2.0/token',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    form: {
        grant_type: settings.grant_type,
        client_id: settings.client_id,
        client_secret: settings.client_secret,
        scope: settings.scope
    },
    json: true
};

// Uncomment this to see request/response
// require('request-debug')(request);

request(options, function (error, response, body) {
    if (error) throw new Error(error);
    var accessToken = body.access_token;
    request.get('https://graph.microsoft.com/v1.0/users', 
        {
            'auth' : {
                'bearer': accessToken
            }
        }, 
        function(error, response, body){
        if (error) throw new Error(error);
        console.log(body);
    })
});
