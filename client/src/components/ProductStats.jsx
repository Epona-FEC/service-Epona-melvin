import React from 'react';
import PropTypes from 'prop-types';
import HalfStar from './HalfStar.jsx';
import EmptyStar from './EmptyStar.jsx';
import FullStar from './FullStar.jsx';


const renderStarRatings = (score) => {
  const stars = [];
  let currentScore = score;
  for (let i = 0; i < 5; i += 1) {
    if (Math.sign(currentScore) === 1 && currentScore >= 1) {
      stars.push(<span><FullStar /></span>);
    } else if (currentScore <= 0) {
      stars.push(<span><EmptyStar /></span>);
    } else if (currentScore < 1 && !Number.isInteger(currentScore - 1) && currentScore > 0) {
      stars.push(<span><HalfStar /></span>);
      currentScore -= currentScore;
    }

    currentScore -= 1;
  }
  return stars;
};

const ProductStats = ({ reviewScore, totalShopReviews }) => (
  <div className="product-stats flex-row">
    <div className="shop-rating-picture flex-column">
      <span>Shop Rating</span>
      <span>{renderStarRatings(reviewScore)}</span>
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
};

ProductStats.defaultProps = {
  reviewScore: 5,
  totalShopReviews: 323,
};

export default ProductStats;
