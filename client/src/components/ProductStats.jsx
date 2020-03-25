import React from 'react';
import PropTypes from 'prop-types';

const ProductStats = ({ reviewScore, totalShopReviews, renderStars }) => (
  <div className="product-stats flex-row">
    <div className="shop-rating-picture flex-column">
      <span>Shop Rating</span>
      <span>{renderStars(reviewScore)}</span>
    </div>
    <div className="shop-rating-container flex-column">
      <span>Total shop reviews</span>
      <span>{totalShopReviews}</span>
    </div>
  </div>
);

ProductStats.propTypes = {
  reviewScore: PropTypes.number,
  totalShopReviews: PropTypes.number,
  renderStars: PropTypes.func,
};

ProductStats.defaultProps = {
  reviewScore: 5,
  totalShopReviews: 323,
  renderStars: () => null,
};

export default ProductStats;
