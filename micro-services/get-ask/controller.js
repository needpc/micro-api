var path      = require('path');
var Models    = require(path.join(__dirname, 'sequelize/models/index'));

module.exports = {

    // Get all question (general || domain)
    Get: function (req, res) {
        includes = [];
        conditions = {};

        // Include relations
        includes = [
            { 
                model: Models["computers_activities"],
                as: "activity",
                attributes: { 
                    exclude: [
                        'id',
                        'description'
                    ] 
                } 
            },
            { 
                model: Models["computers_quests_resps"],
                as: "responses",
                attributes: { 
                    exclude: [
                        'id', 
                        'quest_id', 
                        'created_at', 
                        'updated_at'
                    ] 
                } 
            }
        ]

        // query activity
        if (req.query.activity != null && req.query.activity != "") {
            conditions["activity_id"] = []
            for (var i = 0; i < req.query.activity.length; i++) {
                conditions["activity_id"].push(req.query.activity[i]);
            }
        }
            
        // query activity
        if (req.query.rank != null && req.query.rank != "")
            conditions["rank"] = { $eq: req.query.rank };

        // search in database
        Models["computers_quests"].findAll({
            include: includes,
            where: {
                $and: conditions,
                active: true
            },
            attributes: { 
                exclude: [
                    'activity_id',
                    'created_at', 
                    'updated_at',
                    'active'
                ] 
            }
        })
        .then(question => res.status(200).json({ error: false, data: question }))
        .catch(function(err) {
            console.error(err)
            res.status(500).json({ error: true, message: "Internal error" })
        });
    }
};