var path      = require('path');
var error     = require(path.join(__dirname, 'errors'));
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
        }).then(function (question) {
            error.http_success(req, res, { code: 200, data: question });
        });
    }
};