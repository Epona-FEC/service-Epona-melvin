import React from 'react';
import PropTypes from 'prop-types';

import Review from './Review.jsx';

class ReviewContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewArray: [1, 2, 3, 4],
    };
  }

  render() {
    const { productReviewTotal, shopReviewTotal } = this.props;
    const { reviewArray } = this.state;
    return (
      <div className='review-container'>
        <div className="review-tabs">
          <button type="button">
            Reviews for this item
            <span>{productReviewTotal}</span>
          </button>
          <button type="button">
            Reviews for this item
            <span>{shopReviewTotal}</span>
          </button>
        </div>
        {/* Only show the first four */}
        {/* Render data that will be added to reviewArray */}
        {reviewArray.map(() => <Review />)}
        {/* See More Button */}
        {(reviewArray.length > 4) ? <button className="more-reviews-button" type="button">See More</button> : null}
      </div>
    );
  }
}

ReviewContainer.propTypes = {
  productReviewTotal: PropTypes.number,
  shopReviewTotal: PropTypes.number,
};

ReviewContainer.defaultProps = {
  productReviewTotal: 25,
  shopReviewTotal: 50,
};

export default ReviewContainer;
