const { name, image } = require('faker');

const reviewerData = [];

for (let i = 0; i < 100; i += 1) {
  reviewerData.push({ name: `${name.firstName()} ${name.lastName()}`, photoUrl: image.imageUrl() });
}

module.exports = reviewerData;
