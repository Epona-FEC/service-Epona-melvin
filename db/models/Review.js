module.exports = (sequelize, Sequelize) => {
  const Review = sequelize.define('Review', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    body: {
      type: Sequelize.TEXT,
    },
  });
  return Review;
};
