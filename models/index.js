const { Sequelize } = require('sequelize');
const Post = require('./post');

const sequelize = new Sequelize('database', 'username', 'password', {
    dialect: 'mongodb',
    host: 'localhost'
});

const models = {
    Post: Post.init(sequelize)
};

Object.values(models)
    .filter(model => typeof model.associate === 'function')
    .forEach(model => model.associate(models));

module.exports = { sequelize, models };
