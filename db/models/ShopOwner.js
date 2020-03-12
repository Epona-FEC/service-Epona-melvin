module.exports = (sequelize, {
  INTEGER, STRING,
}) => {
  const ShopOwner = sequelize.define('ShopOwner', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: STRING,
  });
  return ShopOwner;
};
