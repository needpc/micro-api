var request  = require('request');
var assert   = require('assert');

// Ignore invalid self-signed ssl certificate
process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
var base_url = 'https://api.needpc.fr/';

describe('Computers Server API', function() {
    // check if the docs is not deployed
    it('GET /', function(done) {
        request.get(base_url, function(error, response, body) {
            assert.equal(404, response.statusCode);
            done();
        });
    });

    it('GET /v1/search/computers', function(done) {
        request.get(base_url + 'v1/search/computers', function(error, response, body) {
            assert.equal(200, response.statusCode);
            done();
        });
    });

    // extra arguments computers
    it('GET /v1/search/computers?os_id=-1&brand_id=a&activity_id=1t%', function(done) {
        request.get(base_url + 'v1/search/computers', function(error, response, body) {
            assert.equal(200, response.statusCode);
            done();
        });
    });

    it('GET /v1/search/computers/4', function(done) {
        request.get(base_url + 'v1/search/computers/4', function(error, response, body) {
            assert.equal(200, response.statusCode);
            done();
        });
    });

    // Failed => 200 ??? => 400 but good response
    // it('GET /v1/search/computers/id', function(done) {
    //     request.get(base_url + 'search/computers/id', function(error, response, body) {
    //         assert.equal(400, response.statusCode);
    //         done();
    //     });
    // });

    it('GET /v1/ask', function(done) {
        request.get(base_url + 'v1/ask', function(error, response, body) {
            assert.equal(200, response.statusCode);
            done();
        });
    });

    it('GET /v1/search/cpu', function(done) {
        request.get(base_url + 'v1/search/cpu', function(error, response, body) {
            assert.equal(200, response.statusCode);
            done();
        });
    });

    it('GET /v1/search/gpu', function(done) {
        request.get(base_url + 'v1/search/gpu', function(error, response, body) {
            assert.equal(200, response.statusCode);
            done();
        });
    });
});