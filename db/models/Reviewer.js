module.exports = (sequelize, { INTEGER, STRING }) => {
  const Reviewer = sequelize.define('Reviewer', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: STRING,
    photoUrl: STRING,
  });
  return Reviewer;
};
