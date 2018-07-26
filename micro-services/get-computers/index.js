const app          = require('express')();
const http         = require('http');
const morgan       = require('morgan');
const path         = require('path');
const error        = require(path.join(__dirname, 'errors'))
const controller   = require(path.join(__dirname, 'controller'));
require('manakin').global;
    
var env = {
    http: process.env.APP_HTTP_PORT || 3000,
    cache: process.env.APP_CACHE || 3600,
};

app.use(morgan(':remote-addr :remote-user [:date[web]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent - :response-time[2] ms"'));
app.route('/v1/search/computers').get(controller.Get);

http.createServer(app).listen(env.http, () => { 
    console.log('Listening on ' + env.http);
});