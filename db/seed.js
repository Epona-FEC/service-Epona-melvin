const { sequelize } = require('./index');
const initializeDb = require('./initializeDb');
const createDatabaseIfNotExist = require('./models/utils/createDatabaseIfNotExists');

const serviceDbName = 'etsyReviewService';


createDatabaseIfNotExist(serviceDbName)
  .then(() => initializeDb(sequelize))
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.error(err);
  });
