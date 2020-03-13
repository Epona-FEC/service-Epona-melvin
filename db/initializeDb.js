
const generateShopNames = require('./utils/generateShopNames');

module.exports = (sequelize) => sequelize.query('SET FOREIGN_KEY_CHECKS = 0')
  .then(() => sequelize.sync({ force: true }))

  .then(() => sequelize.query('SET FOREIGN_KEY_CHECKS = 1'))

  .then(() => Promise.all(generateShopNames
    .map((name) => sequelize.models.Shop.create({ name }))))
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
  // eslint-disable-next-line no-console
    console.log('Unable to connect', err);
  });
