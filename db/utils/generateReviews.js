const { lorem, random } = require('faker');

const reviewData = [];
const productOrShop = () => (random.number({ min: 1, max: 2 })); // 1 is Shop, 2 is Product
const oneToOneHundred = () => random.number({ min: 1, max: 100 });
for (let i = 0; i < 100; i += 1) {
  const currentReview = {};
  const isShop = (productOrShop() === 1);
  currentReview.body = lorem.paragraph();
  currentReview.score = random.number({ min: 1, max: 5 });
  currentReview.ShopId = (isShop) ? oneToOneHundred() : null;
  currentReview.ProductId = (!isShop) ? oneToOneHundred() : null;
  currentReview.ReviewerId = oneToOneHundred();
  reviewData.push(currentReview);
}

module.exports = reviewData;
