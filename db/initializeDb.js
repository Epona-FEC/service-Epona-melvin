
const generateShopNames = require('./utils/generateShopNames');
const generateProducts = require('./utils/generateProducts');
const generateReviewers = require('./utils/generateReviewers');
const generateReviewPhotos = require('./utils/generateReviewPhotos');
const generateReviews = require('./utils/generateReviews');

module.exports = (sequelize) => sequelize.query('SET FOREIGN_KEY_CHECKS = 0')
  .then(() => sequelize.sync({ force: true }))

  .then(() => sequelize.query('SET FOREIGN_KEY_CHECKS = 1'))

  .then(() => Promise.all(generateShopNames
    .map((name) => sequelize.models.Shop
      .create({ name }))))
  .then(() => Promise.all(generateProducts
    .map((product) => sequelize.models.Product.create(product))))
  .then(() => Promise.all(generateReviewers
    .map((reviewer) => sequelize.models.Reviewer.create(reviewer))))
  .then(() => Promise.all(generateReviews.map((review) => sequelize.models.Product
    .findByPk(review.ProductId,
      { include: [{ model: sequelize.models.Shop }] })
    .then((data) => sequelize.models.Review
      .create({ ShopId: data.Shop.id, ...review })))))
  .then(() => Promise.all(generateReviewPhotos
    .map((photo) => sequelize.models.ReviewPhoto.create(photo))))
  .catch((err) => {
  // eslint-disable-next-line no-console
    console.log('Unable to connect', err);
  });
