const { Sequelize } = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    database: 'testdb',
    username: 'postgres',
    password: '12345678',
});

const User = require('./user')(sequelize);

module.exports = { sequelize, User };