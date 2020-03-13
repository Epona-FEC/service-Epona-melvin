module.exports = (sequelize, { INTEGER, STRING }) => {
  const ReviewPhoto = sequelize.define('ReviewPhoto', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    url: STRING,
    description: STRING,
  });
  return ReviewPhoto;
};
