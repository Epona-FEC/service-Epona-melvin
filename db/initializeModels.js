let Reviewer = require('./models/Reviewer');
let Product = require('./models/Product');
let ReviewPhoto = require('./models/ReviewPhotos');
let ShopOwner = require('./models/ShopOwner');
let Review = require('./models/Review');


/**
* Defines all the Models define in the models directory, and associations
* @param sequelize - Takes the sequelize connection
* @param {object} Sequelize - Takes the Sequelize object, used to define the datatypes
*/
module.exports = (sequelize, Sequelize) => {
  Reviewer = Reviewer(sequelize, Sequelize);
  Product = Product(sequelize, Sequelize);
  ShopOwner = ShopOwner(sequelize, Sequelize);
  ReviewPhoto = ReviewPhoto(sequelize, Sequelize);
  Review = Review(sequelize, Sequelize);
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
};
