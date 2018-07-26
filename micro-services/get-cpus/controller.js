const validator = require('validator');
const path      = require('path');
const md5       = require('md5');
const error     = require(path.join(__dirname, 'errors'));
const Models    = require(path.join(__dirname, 'sequelize/models/index'));
const redis     = require(path.join(__dirname, 'redis'));

module.exports = {

    // Search All CPU avalaible
    Get: function(req, res)
    {
        conditions = {};

        // check if query name is not null
        if (req.query.name != null)
            conditions["name"] = { 
                $like: req.query.name + '%' 
            };
            
        // Request Sequelize
        Models["computers_cpus"].findAll({ 
            attributes: [
                'id', 
                'name',
                'score'
            ],
            where: {
                $and: conditions,
            },
        }).then(function(object) {
            redis.setex(md5('cpu'), 3600, JSON.stringify(object));
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
        condition = {}

        if (req.query.name != null)
            condition["name"] = "cpu-"+req.query.name;
        else
            condition["name"] = "cpu"

        redis.get(md5(condition["name"]), function (err, data) {
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