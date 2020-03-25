const { lorem, random } = require('faker');

const reviewData = [];
let j = 0;
for (let i = 0; i < 100; i += 1) {
  if (i === 4) {
    j += 1;
  }
  if (i % 10 === 0) {
    j += 1;
  }
  const currentReview = {};
  currentReview.body = lorem.paragraph();
  currentReview.score = random.number({ min: 1, max: 5 });
  currentReview.ProductId = j;
  currentReview.ReviewerId = i;
  reviewData.push(currentReview);
}

module.exports = reviewData;
