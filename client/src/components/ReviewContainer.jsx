/* eslint-disable class-methods-use-this */
import React from 'react';
import PropTypes from 'prop-types';
import sampleData from '../../sampleData';

import Review from './Review.jsx';

class ReviewContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewArray: sampleData,
    };
    this.getFirstFourReviews = this.getFirstFourReviews.bind(this);
  }

  getFirstFourReviews() {
    const firstFour = [];
    const { reviewArray } = this.state;
    for (let i = 0; i < 4; i += 1) {
      const reviewData = reviewArray[i];
      if (reviewArray[i] === undefined) {
        break;
      } else {
        firstFour.push(<Review
          review={reviewData.review}
          product={reviewData.product}
          reviewer={reviewData.reviewer}
        />);
      }
    }
    return firstFour;
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

        {this.getFirstFourReviews().map((data) => data)}
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
