require('dotenv').config();
const Sequelize = require('sequelize');
const config = require('./config.js');

const env = process.env.NODE_ENV || 'development';
const sequelizeConfig = config[env];

let sequelize;

if (sequelizeConfig.use_env_variable) {
    const connectionString = process.env[sequelizeConfig.use_env_variable];
    const dialectOptions = {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    };
  
    sequelize = new Sequelize(connectionString, {
      ...sequelizeConfig,
      dialectOptions,
    });
  } else {
    sequelize = new Sequelize(sequelizeConfig.database, sequelizeConfig.username, sequelizeConfig.password, sequelizeConfig);
  }
  

module.exports = sequelize;
