const { name } = require('faker');

const reviewerData = [];

for (let i = 0; i < 100; i += 1) {
  reviewerData.push({ name: `${name.firstName()} ${name.lastName()}` });
}

module.exports = reviewerData;
