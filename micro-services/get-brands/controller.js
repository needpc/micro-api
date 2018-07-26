const validator = require('validator');
const path      = require('path');
const md5       = require('md5');
const error     = require(path.join(__dirname, 'errors'));
const Models    = require(path.join(__dirname, 'sequelize/models/index'));
const redis     = require(path.join(__dirname, 'redis'));

module.exports = {

    // Search All Brand avalaible
    Get: function(req, res)
    {
        // Request Sequelize
        Models["computers_brands"].findAll({ 
            attributes: [
                'id',
                'name',
                'description'
            ],
        }).then(function(object) {
            redis.setex(md5('brand'), 3600, JSON.stringify(object));
            error.http_success(req, res, { 
                code: 200, 
                data: object 
            });
        }).error(function(err) {
            console.log('Error occured' + err);
            error.http_error(req, res, { 
                code: 500 
            });
        });
    },

    GetCache: function(req, res, next) {
        redis.get(md5('brand'), function (err, data) {
            if (err) throw err;
        
            if (data != null) {
                error.http_success(req, res, { 
                    code: 200, 
                    data: JSON.parse(data)
                });
            } else {
                next();
            }
        });
    }
};