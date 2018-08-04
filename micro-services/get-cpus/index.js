const app          = require('express')();
const morgan       = require('morgan');
const path         = require('path');
const prometheus   = require('prom-client')
const controller   = require(path.join(__dirname, 'controller'));
require('manakin').global;
    
const env = {
    http: process.env.APP_HTTP_PORT || 3000,
    cache: process.env.APP_CACHE || 3600,
    metrics: process.env.PROMETHEUS_TIMEOUT || 5000,
};

const collectDefaultMetrics = prometheus.collectDefaultMetrics;

// Probe every 5th second.
collectDefaultMetrics({ timeout: env.metrics });

/////// USE /////////
// Nginx Output
app.use(morgan(':remote-addr :remote-user [:date[web]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent - :response-time[2] ms"'));


/////////// Routes ////////
app.route('/v1/search/cpu').get(controller.Get);

app.get('/metrics', (req, res) => {
    res.set('Content-Type', prometheus.register.contentType)
    res.end(prometheus.register.metrics())
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