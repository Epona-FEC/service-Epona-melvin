const { commerce, random, image } = require('faker');

const productData = [];
for (let i = 0; i < 100; i += 1) {
  const currentProduct = {};
  currentProduct.name = commerce.productName();
  currentProduct.ShopId = random.number({ min: 1, max: 100 });
  currentProduct.favorites = random.number();
  currentProduct.photoUrl = image.imageUrl();
  currentProduct.listed_at = new Date();
  productData.push(currentProduct);
}

module.exports = productData;
