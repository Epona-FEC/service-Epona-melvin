const Sequelize = require('sequelize');

const { mySQLPassword, mySQLusername } = require('../config/index.js');

const serviceDbName = 'etsyReviewService';
const createDatabaseIfNotExist = require('./models/utils/createDatabaseIfNotExists');
const initializeDb = require('./initializeDb');

const sequelize = new Sequelize(serviceDbName, mySQLusername, mySQLPassword, {
  dialect: 'mysql',
});

const initializeModels = require('./initializeModels');

initializeModels(sequelize, Sequelize);

createDatabaseIfNotExist(serviceDbName)
  .then(() => initializeDb(sequelize))
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.error(err);
  });
