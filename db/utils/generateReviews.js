const { lorem, random } = require('faker');

const reviewData = [];
const oneToOneHundred = () => random.number({ min: 1, max: 100 });
for (let i = 0; i < 100; i += 1) {
  const currentReview = {};
  currentReview.body = lorem.paragraph();
  currentReview.score = random.number({ min: 1, max: 5 });
  currentReview.ProductId = oneToOneHundred();
  currentReview.ReviewerId = oneToOneHundred();
  reviewData.push(currentReview);
}

module.exports = reviewData;
