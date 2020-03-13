
module.exports = (sequelize) => sequelize.query('SET FOREIGN_KEY_CHECKS = 0')
  .then(() => sequelize.sync({ force: true }))

  .then(() => sequelize.query('SET FOREIGN_KEY_CHECKS = 1'))

  .then(() => {
  // eslint-disable-next-line no-console
    console.log('DB is connected');
  })
  .catch((err) => {
  // eslint-disable-next-line no-console
    console.log('Unable to connect', err);
  });
