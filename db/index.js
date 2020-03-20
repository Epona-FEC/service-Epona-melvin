const Sequelize = require('sequelize');

const { mySQLPassword, mySQLusername } = require('../config/index.js');

const initializeModels = require('./initializeModels');

const serviceDbName = 'etsyReviewService';

const sequelize = new Sequelize(serviceDbName, mySQLusername, mySQLPassword, {
  dialect: 'mysql',
});

initializeModels(sequelize, Sequelize);

module.exports = {
  sequelize, Sequelize,
};
