'use strict';

var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(module.filename);
var db        = {};

var config    = {
  database: process.env.DATABASE || "dev-node",
  username: process.env.DATABASE_USERNAME || "node",
  password: process.env.DATABASE_PASSWORD || "nodejs",
  host: process.env.DATABASE_HOST || "db",
  dialect: process.env.DATABASE_DIALECT || "postgres",
  ssl: process.env.DATABASE_SSL || false,
  logging: process.env.ORM_LOGGING || false,
}

var sequelize = new Sequelize(config.database, config.username, config.password, config);

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(function(file) {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
