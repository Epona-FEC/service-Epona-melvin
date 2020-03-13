const { company } = require('faker');

const shopNames = [];
for (let i = 0; i < 100; i += 1) {
  shopNames.push(company.companyName());
}

module.exports = shopNames;
