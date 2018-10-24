const validator = require('validator');
const path      = require('path');
const Models    = require(path.join(__dirname, 'sequelize/models/index'));

module.exports = {

    // Get all computers
    Get: function(req, res) {
        args = ["os_id", "screen_size", "brand_id", "activity_id", "cpu_id", "gpu_id"]
        includes = []
        conditions = {};

        // local table, search
        if (req.query.model != null && validator.isLength(req.query.model, { min: 0, max: 40 }))
            conditions["model"] = { $like: '%' + req.query.model + '%' };

        // Filtring IDs
        args.forEach(function(element) {
            if (req.query[element] != null && req.query[element] != "" && !Array.isArray(req.query[element])) {
                if (validator.isInt(req.query[element], { allow_leading_zeroes: false }))
                    conditions[element] = req.query[element]
            } else if (Array.isArray(req.query[element])) {
                conditions[element] = []
                for (var i = 0; i < req.query[element].length; i++) {
                    if (validator.isInt(req.query[element][i], { allow_leading_zeroes: false }))
                        conditions[element].push(req.query[element][i]);
                }
            }
        });

        // Webcam
        if (req.query.webcam != null && req.query.webcam != "") {
            if (req.query.webcam == "true" || req.query.webcam == "false") {
                conditions["webcam"] = req.query.webcam;
            }
        }

        // GPU Scoring
        if ((req.query.gpu_score_min != null && req.query.gpu_score_min != "") &&
            (req.query.gpu_score_max != null && req.query.gpu_score_max != "")) {
            conditions["$gpu.score$"] = {
                $gte: (parseInt(req.query.gpu_score_min, 10)),
                $lte: (parseInt(req.query.gpu_score_max, 10)),
            };
        }

        // GPU Scoring
        if ((req.query.weight_max != null && req.query.weight_max != "") &&
            (req.query.weight_min != null && req.query.weight_min != "")) {
            conditions["weight"] = {
                $gte: (parseInt(req.query.weight_min, 10)),
                $lte: (parseInt(req.query.weight_max, 10)),
            };
        }

        // GPU Scoring
        if ((req.query.price_max != null && req.query.price_max != "") &&
            (req.query.price_min != null && req.query.price_min != "")) {
            conditions["$prices.last_price$"] = {
                $gte: (parseInt(req.query.price_min, 10)),
                $lte: (parseInt(req.query.price_max, 10)),
            };
        }

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
                    include: [] 
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
                'updated_at',
                'created_at'
            ],
        }).then(function(computers) {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json({ error: false, data: computers })
        }).error(function(err) {
            console.error(err);
            res.setHeader('Content-Type', 'application/json');
            res.status(500).json({ error: true, message: "Internal error" })
        });
    },

    GetId: function(req, res) {
        includes = []
        conditions = {};
        conditions['id'] = req.params.id

        if (typeof conditions['id'] != "number") {
            res.setHeader('Content-Type', 'application/json');
            res.status(400).json({ error: true, message: "Bad request" })
        }

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
        }).then(function(computers) {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json({ error: false, data: computers })
        }).catch(function(err) {
            console.error(err);
            res.setHeader('Content-Type', 'application/json');
            res.status(500).json({ error: true, message: "Internal error" })
        });
    },
}