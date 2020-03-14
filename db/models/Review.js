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
<<<<<<< HEAD
=======
    score: {
      type: Sequelize.INTEGER,
    },
>>>>>>> c5c09e74f84665dc639773f86cbc6210eb06c897
  });
  return Review;
};
