const path      = require('path');
const Models    = require(path.join(__dirname, 'sequelize/models/index'));

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
        }).then(function(cpus) {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json({ error: false, data: cpus })
        }).error(function(err) {
            console.error(err);
            res.setHeader('Content-Type', 'application/json');
            res.status(500).json({ error: true, message: "Internal error" });
        });
    },
};