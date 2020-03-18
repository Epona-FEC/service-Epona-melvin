const { sequelize, Sequelize } = require('./index');
const createDatabaseIfNotExist = require('./models/utils/createDatabaseIfNotExists');
const initializeDb = require('./initializeDb');
const initializeModels = require('./initializeModels');

const serviceDbName = 'etsyReviewService';

initializeModels(sequelize, Sequelize);

createDatabaseIfNotExist(serviceDbName)
  .then(() => initializeDb(sequelize))
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.error(err);
  });
