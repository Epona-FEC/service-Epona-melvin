import React from 'react';
import PropTypes from 'prop-types';

const ProductStats = ({ reviewScore, totalShopReviews }) => (
  <div>
    <div className="shop-rating-picture">
      <em>Shop Rating</em>
      {/* Picture here */}
      {reviewScore}
    </div>
    <div className="total-shop-reviews">
      <em>Total shop reviews</em>
      {totalShopReviews}
    </div>
  </div>
);

ProductStats.propTypes = {
  reviewScore: PropTypes.number,
  totalShopReviews: PropTypes.number,
};

ProductStats.defaultProps = {
  reviewScore: 5,
  totalShopReviews: 323,
};

export default ProductStats;
