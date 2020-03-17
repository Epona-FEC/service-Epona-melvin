module.exports = (sequelize, {
  INTEGER, STRING, DATE, NOW,
}) => {
  const Product = sequelize.define('Product', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: STRING,
      allowNull: false,
    },
    listed_at: {
      type: DATE,
      default: NOW,
    },
    favorites: {
      type: INTEGER,
    },
    photoUrl: STRING,
  }, {
    timestamps: false,
  });
  return Product;
};
