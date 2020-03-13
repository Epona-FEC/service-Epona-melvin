const Sequelize = require('sequelize');

const { mySQLPassword, mySQLusername } = require('../config/index.js');

const serviceDbName = 'etsyReviewService';
const createDatabaseIfNotExist = require('./models/utils/createDatabaseIfNotExists');

const sequelize = new Sequelize(serviceDbName, mySQLusername, mySQLPassword, {
  dialect: 'mysql',
});
const Reviewer = require('./models/Reviewer')(sequelize, Sequelize);
const Product = require('./models/Product')(sequelize, Sequelize);
const ReviewPhoto = require('./models/ReviewPhotos')(sequelize, Sequelize);
const ShopOwner = require('./models/ShopOwner')(sequelize, Sequelize);
const Review = require('./models/Review')(sequelize, Sequelize);


Review.hasOne(ReviewPhoto, { foreignKey: 'photo_id' });
Review.hasOne(ShopOwner, { foreignKey: 'shopowner_id' });
Review.hasOne(Product, { foreignKey: 'product_id' });
Review.hasOne(Reviewer, { foreignKey: 'author_id' });
ReviewPhoto.belongsToMany(Review, { through: 'ProductReviews' });
ShopOwner.belongsToMany(Review, { through: 'ShopOwnerReviews' });
ReviewPhoto.belongsTo(Review);
Reviewer.belongsTo(Review);
Product.hasOne(Product, { foreignKey: 'shopowner_id' });
ShopOwner.belongsToMany(Product, { through: 'ShopOwnerProducts' });


createDatabaseIfNotExist(serviceDbName)
  .then(() => {
    sequelize.query('SET FOREIGN_KEY_CHECKS = 0')
      .then(() => sequelize.sync({ force: true }))

      .then(() => sequelize.query('SET FOREIGN_KEY_CHECKS = 1'))

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
