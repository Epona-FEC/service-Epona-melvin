module.exports = (sequelize, Sequelize) => {
  const Review = sequelize.define('Review', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    photo_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    body: {
      type: Sequelize.STRING,
    },
    reviewer_id: {
      type: Sequelize.INTEGER,
    },
    product_id: {
      type: Sequelize.INTEGER,
    },
    shop_id: {
      type: Sequelize.INTEGER,
    },
  });
  return Review;
};
