const { Sequelize } = require('sequelize');
const config = require('../config/index');

console.log(config);

const sequelize = new Sequelize(config.database, config.userName, config.passWord, {
    host: config.host,
    port: config.port,
    dialect: config.dialect
});

module.exports = sequelize;