var path      = require('path');
var error     = require(path.join(__dirname, 'errors'));
var Models    = require(path.join(__dirname, 'sequelize/models/index'));

module.exports = {
    Get: function(req, res) {
        includes = []
        conditions = {};
        conditions['id'] = req.params.id

        // Push all relation, search no avalailble
        includes.push({
                model: Models["computers_os"],
                as: "os",
                attributes: {
                    exclude: [
                        'id'
                    ]
                },
                required: false
            }, {
                model: Models["computers_cpus"],
                as: "cpu",
                attributes: {
                    exclude: [
                        'id'
                    ]
                },
                required: false
            }, {
                model: Models["computers_gpus"],
                as: "gpu",
                attributes: {
                    exclude: [
                        'id'
                    ]
                },
                required: false
            }, {
                model: Models["computers_chipsets"],
                as: "chipset",
                attributes: {
                    exclude: [
                        'id'
                    ]
                },
                required: false
            }, {
                model: Models["computers_activities"],
                as: "activity",
                attributes: {
                    exclude: [
                        'id',
                        'description'
                    ]
                },
                required: false
            }, 
            { 
                model: Models['computers_prices'], 
                as: 'prices',
                attributes: { 
                    exclude: [
                        'id', 
                        'computer_id', 
                        'trader_id', 
                        'updated_at'
                    ] 
                }, 
                include: [
                    {
                        model: Models['computers_traders'],
                        attributes: [
                            'name'
                        ],
                        required: false
                    }
                ], 
                required: false 
            },
        )

        // request
        Models["computers"].findAll({
                include: includes,
                where: {
                    $and: conditions,
                    active: true
                },
                attributes: [
                    'id',
                    'model',
                    'picture',
                    'connector_available',
                    'weight',
                    'length',
                    'width',
                    'height',
                    'memory_size',
                    'memory_type',
                    'memory_max_size',
                    'keyboard_type',
                    'keyboard_numpad',
                    'keyboard_light',
                    'screen_type',
                    'screen_resolution',
                    'screen_refresh_rate',
                    'screen_size',
                    'screen_format',
                    'network',
                    'webcam',
                    'updated_at',
                    'created_at'
                ],
            })
            .then(function(computers) {
                error.http_success(req, res, {
                    code: 200,
                    data: computers
                });
            })
            .error(function(err) {
                console.log('Error occured' + err);
                error.http_error(req, res, {
                    code: 500
                });
            })
    },
}