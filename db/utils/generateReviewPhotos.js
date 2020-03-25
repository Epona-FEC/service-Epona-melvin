const { image, lorem } = require('faker');

const imageData = [];
for (let i = 1; i <= 100; i += 1) {
  const currentImage = {};
  currentImage.url = image.imageUrl();
  currentImage.description = lorem.sentence();
  currentImage.ReviewId = i;
  imageData.push(currentImage);
}

module.exports = imageData;
