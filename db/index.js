const Sequelize = require('sequelize');

const { mySQLPassword, mySQLusername } = require('../config/index.js');

const serviceDbName = 'etsyReviewService';
const createDatabaseIfNotExist = require('./models/utils/createDatabaseIfNotExists');

const sequelize = new Sequelize(serviceDbName, mySQLusername, mySQLPassword, {
  dialect: 'mysql',
});
createDatabaseIfNotExist(serviceDbName)
  .then(() => {
    sequelize.authenticate()
      .then(() => {
        // eslint-disable-next-line no-console
        console.log('User is connected');
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log('Unable to connect', err);
      });
  })
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.error(err);
  });
