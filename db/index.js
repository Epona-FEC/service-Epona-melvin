const Sequelize = require('sequelize');

const { mySQLPassword, mySQLusername } = require('../config/index.js');

const serviceDbName = 'etsyReviewService';

const sequelize = new Sequelize(serviceDbName, mySQLusername, mySQLPassword, {
  dialect: 'mysql',
});

module.exports = {
  sequelize, Sequelize,
};
