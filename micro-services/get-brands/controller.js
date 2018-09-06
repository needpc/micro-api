const path      = require('path');
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
        }).then(function(brands) {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json({ error: false, data: brands })
        }).error(function(err) {
            console.error(err);
            res.setHeader('Content-Type', 'application/json');
            res.status(500).json({ error: true, message: "Internal error" })
        });
    },
};