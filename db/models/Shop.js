module.exports = (sequelize, {
  INTEGER, STRING,
}) => {
  const Shop = sequelize.define('Shop', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: { type: STRING },
  });
  return Shop;
};
