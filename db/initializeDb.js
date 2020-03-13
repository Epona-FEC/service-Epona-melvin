
const generateShopNames = require('./utils/generateShopNames');
const generateProducts = require('./utils/generateProducts');
const generateReviewers = require('./utils/generateReviewers');
const generateReviewPhotos = require('./utils/generateReviewPhotos');
const generateReviews = require('./utils/generateReviews');

module.exports = (sequelize) => sequelize.query('SET FOREIGN_KEY_CHECKS = 0')
  .then(() => sequelize.sync({ force: true }))

  .then(() => sequelize.query('SET FOREIGN_KEY_CHECKS = 1'))

  .then(() => generateShopNames
    .map((name) => sequelize.models.Shop
      .create({ name })))
  .then(() => generateProducts
    .map((product) => sequelize.models.Product.create(product)))
  .then(() => generateReviewers.map((reviewer) => sequelize.models.Reviewer.create(reviewer)))
  .then(() => generateReviewPhotos
    .map((photo) => sequelize.models.ReviewPhoto.create(photo)))
  .then(() => generateReviews.map((review) => sequelize.models.Review.create(review)))
  .catch((err) => {
  // eslint-disable-next-line no-console
    console.log('Unable to connect', err);
  });
