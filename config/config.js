// Import necessary dependencies
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

// Sequelize configuration
module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: 'localhost',
    dialect: 'mysql',
  },
  production: {
    use_env_variable: 'JAWSDB_URL',
    dialect: 'mysql',
  },
};
