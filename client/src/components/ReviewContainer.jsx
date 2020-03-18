/* eslint-disable class-methods-use-this */
import React from 'react';
import PropTypes from 'prop-types';
import sampleData from '../../sampleData';

import Review from './Review.jsx';

class ReviewContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productReviews: sampleData,
      shopReviews: [],
      selectedReviews: 'product',
    };
    this.getFirstFourReviews = this.getFirstFourReviews.bind(this);
  }

  getFirstFourReviews(reviews) {
    const firstFour = [];
    for (let i = 0; i < 4; i += 1) {
      const reviewData = reviews[i];
      if (reviews[i] === undefined) {
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
    const { productReviews, shopReviews } = this.state;

    return (
      <div className='review-container'>
        <div className="review-tabs">
          <button type="button" className="product-review-button" onClick={()=> this.setState({ selectedReviews: 'product' })}>
            Reviews for this item
            <span> {productReviewTotal}</span>
          </button>
          <button type="button" className="shop-review-button" onClick={()=> this.setState({ selectedReviews: 'shop' })}>
            Reviews for this shop
            <span>{shopReviewTotal}</span>
          </button>
        </div>

        {this.getFirstFourReviews(productReviews).map((data) => data)}
        {(productReviews.length > 4) ? <button className="more-reviews-button" type="button">See More</button> : null}
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
