let Reviewer = require('./models/Reviewer');
let Product = require('./models/Product');
let ReviewPhoto = require('./models/ReviewPhotos');
let Shop = require('./models/Shop');
let Review = require('./models/Review');


/**
* Defines all the Models define in the models directory, and associations
* @param sequelize - Takes the sequelize connection
* @param {object} Sequelize - Takes the Sequelize object, used to define the datatypes
*/
module.exports = (sequelize, Sequelize) => {
  Reviewer = Reviewer(sequelize, Sequelize);
  Product = Product(sequelize, Sequelize);
  Shop = Shop(sequelize, Sequelize);
  ReviewPhoto = ReviewPhoto(sequelize, Sequelize);
  Review = Review(sequelize, Sequelize);
  Review.belongsTo(Shop);
  Review.belongsTo(Product);
  Review.belongsTo(Reviewer);
  Shop.hasMany(Review);
  ReviewPhoto.belongsTo(Review);
  Reviewer.hasMany(Review);
  Product.belongsTo(Shop);
  Product.hasOne(Review);
  Shop.hasMany(Product);
};
