const { image, lorem } = require('faker');

const imageData = [];
for (let i = 0; i < 100; i += 1) {
  const currentImage = {};
  currentImage.url = image.imageUrl();
  currentImage.description = lorem.sentence();
  imageData.push(currentImage);
}

module.exports = imageData;
