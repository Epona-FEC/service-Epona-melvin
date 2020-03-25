const express = require('express');
const path = require('path');
const {
  sequelize: {
    models: {
      Product, Shop, Review, Reviewer, ReviewPhoto,
    },
  },
} = require('../db');

const app = express();
const PORT = 3003;

// Access components in build.js
app.use(express.static(path.join(__dirname, '/../public/dist')));

app.use('/listing/:id', (req, res) => {
  let apiData = {
    reviewPhotos: [],
  };

  Product.findByPk(req.params.id, {
    include: [{
      model: Review,
      as: 'productReviews',
      include: [{ model: Reviewer }, { model: ReviewPhoto }],
    },
    { model: Shop }],
  })
    .then((data) => {
      if (data === null) {
        res.status(200);
        res.send({ message: 'This product does not exist' });
      }
      const {
        dataValues: {
        // eslint-disable-next-line no-shadow
          Reviewer, productReviews, Shop, ...productData
        },
      } = data;
      apiData = { productData, shopData: Shop.dataValues };

      return productReviews
        .map(({ dataValues: { Reviewer: reviewerData, ...product } }) => ({
          ...product,
          Product: apiData.productData,
          reviewer: reviewerData.dataValues,
        }));
    })
    .then((productReviews) => {
      // apiData.productData.productReviews = productReviews;
      apiData.productReviews = productReviews;
      return Review.findAll({
        where: { ShopId: apiData.productData.ShopId },
        include: [{ model: Reviewer }, { model: Product }],
      });
    })
    .then((shopReviews) => {
      return Promise.resolve(shopReviews.map(({
      dataValues:
      { Reviewer: reviewerData, ...shop },
    }) => ({ ...shop, reviewer: reviewerData.dataValues })))
      .then((shopReviewData) => {
        apiData = { ...apiData, shopReviews: shopReviewData };
      })})
    .then(() => {
      res.status(200);
      res.send(apiData);
    })
    .catch((err) => {
      res.status(500);
      res.send({ message: 'Internal Error', err });
    });
});

app.use((req, res) => {
  res.status(404).send("Sorry can't find that!");
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
