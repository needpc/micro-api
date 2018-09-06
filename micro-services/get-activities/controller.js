const path      = require('path');
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
        }).then(function(activities) {            
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json({ error: false, data: activities })
        }).error(function(err) {
            console.error(err);
            res.setHeader('Content-Type', 'application/json');
            res.status(500).json({ error: true, message: "Internal error" })
        });
    },
};