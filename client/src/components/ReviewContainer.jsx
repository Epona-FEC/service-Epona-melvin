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
      seeMoreReviewsIsClicked: false,
      shopReviews: [1, 2, 3, 4, 5, 7, 8, 20],
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

  getRestOfReviews(reviews) {
    const rest = [];
    for (let i = 4; i < 20; i += 1) {
      const reviewData = reviews[i];
      if (reviews[i] === undefined) {
        break;
      } else {
        rest.push(<Review
          review={reviewData.review}
          product={reviewData.product}
          reviewer={reviewData.reviewer}
        />);
      }
    }
    return rest;
  }

  moreReviewsClick() {
    this.setState({ seeMoreReviewsIsClicked: true });
  }

  render() {
    const { productReviewTotal, shopReviewTotal } = this.props;
    const {
      productReviews, shopReviews, selectedReviews, seeMoreReviewsIsClicked,
    } = this.state;

    return (
      <div className='review-container'>
        <div className="review-tabs">
          <button type="button" className="product-review-button" onClick={() => this.setState({ selectedReviews: 'product' })}>
            Reviews for this item
            <span>
              {productReviewTotal}
            </span>
          </button>
          <button type="button" className="shop-review-button" onClick={() => this.setState({ selectedReviews: 'shop' })}>
            Reviews for this shop
            <span>{shopReviewTotal}</span>
          </button>
        </div>
        {/* See More Reviews User story TODO: When see more reviews is clicked */}
        {/* Up to 20 reviews are shown, if less than 20 it will show all of the reviews */}
        {(selectedReviews === 'product') ? [
          <Reviews getReviews={this.getFirstFourReviews} reviews={productReviews} />,
          (productReviews.length > 4 && !seeMoreReviewsIsClicked)
            ? <button className="more-reviews-button" type="button" onClick={() => this.moreReviewsClick()}>See More</button>
            : null,
          (seeMoreReviewsIsClicked)
            ? <Reviews getReviews={this.getRestOfReviews} reviews={productReviews} /> : null,
        ] : [
          <Reviews getReviews={this.getFirstFourReviews} reviews={shopReviews} />,
          (shopReviews.length > 4 && !seeMoreReviewsIsClicked) ? <button className="more-reviews-button" type="button" onClick={() => this.moreReviewsClick()}>See More</button> : null,
          (seeMoreReviewsIsClicked)
            ? <Reviews getReviews={this.getRestOfReviews} reviews={shopReviews} /> : null,
        ]}
      </div>
    );
  }
}
// TODO: Refacor this line to put it in
const Reviews = ({ getReviews, reviews }) => getReviews(reviews).map((data) => data);

ReviewContainer.propTypes = {
  productReviewTotal: PropTypes.number,
  shopReviewTotal: PropTypes.number,
};

ReviewContainer.defaultProps = {
  productReviewTotal: 25,
  shopReviewTotal: 50,
};

export default ReviewContainer;
