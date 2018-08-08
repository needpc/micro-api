const path      = require('path');
const error     = require(path.join(__dirname, 'errors'));
const Models    = require(path.join(__dirname, 'sequelize/models/index'));

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
};