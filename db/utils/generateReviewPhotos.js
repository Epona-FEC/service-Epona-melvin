const { image, lorem } = require('faker');

const imageData = [];
let j = 0;
for (let i = 1; i <= 100; i += 1) {
  if (i > 4) {
    j += 1;
  }
  if (i % 10 === 0) {
    j += 1;
  }
  const currentImage = {};
  currentImage.url = image.imageUrl();
  currentImage.description = lorem.sentence();
  currentImage.ReviewId = j;
  imageData.push(currentImage);
}

module.exports = imageData;
