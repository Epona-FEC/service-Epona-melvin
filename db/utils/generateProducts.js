const { commerce, random, image } = require('faker');

const productData = [];
let j = 1;
for (let i = 0; i < 100; i += 1) {
  if (i % 10 === j) {
    j += 1;
  }
  const currentProduct = {};
  currentProduct.name = commerce.productName();
  currentProduct.ShopId = j;
  currentProduct.favorites = random.number();
  currentProduct.photoUrl = image.imageUrl();
  currentProduct.listed_at = new Date();
  productData.push(currentProduct);
}

module.exports = productData;
