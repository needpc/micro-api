const path      = require('path');
const error     = require(path.join(__dirname, 'errors'));
const Models    = require(path.join(__dirname, 'sequelize/models/index'));

module.exports = {

    Get: function(req, res)
    {
        conditions = {};

        // check if query name is not null
        if (req.query.name != null)
            conditions["name"] = { $like: req.query.name + '%' };

        // Search in database
        Models["computers_activities"].findAll({ 
            attributes: [
                'id', 
                'name'
            ], 
            where: {
                $and: conditions,
            },
        }).then(function(object) {            
            error.http_success(req, res, { 
                code: 200, 
                data: object 
            });
        }).error(function(err) {
            console.log('Error occured' + err);
            error.http_error(req, res, { code: 500 });
        });
    },
};