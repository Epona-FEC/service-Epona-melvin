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
    shopowner_id: {
      type: INTEGER,
      allowNull: false,
    },
    favorites: {
      type: INTEGER,
    },
  }, {
    timestamps: false,
  });
  return Product;
};
