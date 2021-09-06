const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
    host: process.env.JAWSDB_MARIA_URL,
    dialect: 'mysql',
    }
);

module.exports = sequelize;