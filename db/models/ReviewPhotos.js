module.exports = (sequelize, { INTEGER, STRING }) => {
  const Review = sequelize.define('Review', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    url: STRING,
    description: STRING,
  });
  return Review;
};
