const express = require('express');
const {
  sequelize: {
    models: {
      Product, Shop, Review, Reviewer, ReviewPhoto,
    },
  },
} = require('../db');

const app = express();
const PORT = 4000;

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
      const {
        dataValues: {
        // eslint-disable-next-line no-shadow
          Reviewer, productReviews, Shop, ...productData
        },
      } = data;
      apiData = { productData, shopData: Shop.dataValues };
      return productReviews
        .map(({ dataValues: { Reviewer: reviewerData, ReviewPhoto: photo, ...product } }) => ({
          ...product,
          reviewer: reviewerData.dataValues,
        }));
    })
    .then((productReviews) => {
      apiData.productReviews = productReviews;
      return Review.findAll({
        where: { ShopId: apiData.productData.ShopId },
        include: [{ model: Reviewer }],
      });
    })
    .then((shopReviews) => Promise.resolve(shopReviews.map(({
      dataValues:
      { Reviewer: reviewerData, ...shop },
    }) => ({ ...shop, reviewer: reviewerData.dataValues })))
      .then((shopReviewData) => {
        apiData = { ...apiData, shopReviews: shopReviewData };
      }))
    .then(() => {
      res.status(200);
      res.send(apiData);
    })
    .catch((err) => {
      res.status(500);
      res.send({ message: 'Issue in the database', err });
    });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
