const app          = require('express')();
const morgan       = require('morgan');
const path         = require('path');
const prometheus   = require('prom-client')
const controller   = require(path.join(__dirname, 'controller'));
require('manakin').global;

var cache = require('express-redis-cache')({
    host: process.env.APP_REDIS_HOST || '127.0.0.1',
    port: process.env.APP_REDIS_PORT || 6379,
    expire: process.env.APP_CACHE || 3600,
    type: 'application/json'
});
    
const env = {
    http: process.env.APP_HTTP_PORT || 3000,
    cache: process.env.APP_CACHE || 3600,
    metrics: process.env.PROMETHEUS_TIMEOUT || 5000,
};

const collectDefaultMetrics = prometheus.collectDefaultMetrics;

// Probe every 5th second.
collectDefaultMetrics({ timeout: env.metrics });

// Check Services
cache.on('connected', function () {
    console.log("Redis connected")
});

/////// USE /////////
// Nginx Output
app.use(morgan(':remote-addr :remote-user [:date[web]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent - :response-time[2] ms"'));


/////////// Routes ////////
app.route('/v1/search/computers/:id').get(cache.route(), controller.Get);

app.get('/metrics', (req, res) => {
    res.set('Content-Type', prometheus.register.contentType)
    res.end(prometheus.register.metrics())
})

app.get('/healthz', (req, res) => {
    res.end()
})

const server = app.listen(env.http, () => {
    console.log(`app listening on port ${env.http}!`)
})

// Graceful shutdown
process.on('SIGTERM', () => {
    clearInterval(metricsInterval)
  
    server.close((err) => {
        if (err) {
            console.error(err)
            process.exit(1)
        }
  
        process.exit(0)
    })
})