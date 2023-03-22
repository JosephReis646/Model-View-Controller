const Sequelize = require('sequelize');
const config = require('./config.js');

const env = process.env.NODE_ENV || 'development';
const sequelizeConfig = config[env];

let sequelize;

if (sequelizeConfig.use_env_variable) {
  sequelize = new Sequelize(process.env[sequelizeConfig.use_env_variable], sequelizeConfig);
} else {
  sequelize = new Sequelize(sequelizeConfig.database, sequelizeConfig.username, sequelizeConfig.password, sequelizeConfig);
}

module.exports = sequelize;
