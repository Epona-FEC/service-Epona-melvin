/* eslint-disable class-methods-use-this */
import React from 'react';
import PropTypes from 'prop-types';

import sampleData from '../../sampleData';

import ReviewPhotos from './ReviewPhotos.jsx';
import Review from './Review.jsx';

import '../style.css';

class ReviewContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productReviews: sampleData,
      seeMoreReviewsIsClicked: false,
      shopReviews: [1, 2, 3, 4, 5, 7, 8, 20],
      productReviewsSelected: true,
      reviewPhotos: [
        {
          url: 'https://source.unsplash.com/random/200x200',
          description: 'Purchase of a customer',
        },
        {
          url: 'https://source.unsplash.com/random/200x200',
          description: 'Purchase of a customer',
        },
        {
          url: 'https://source.unsplash.com/random/200x200',
          description: 'Purchase of a customer',
        },
        {
          url: 'https://source.unsplash.com/random/200x200',
          description: 'Purchase of a customer',
        },
      ],
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

  /**
   * Gets the four photos from reviewPhotos state array
   * @param {integer} index The starting position where iterating through the reviewPhotos
   *
   */
  getFourPhotos(index) {
    const photos = [];
    const { reviewPhotos } = this.state;
    for (let i = index; i < index + 4; i += 1) {
      photos.push(reviewPhotos[i]);
    }
    return photos;
  }

  /**
   * Sets currrent tab, for reviews
   * @param {boolean} isSelected  Boolean if product reviews is selected
   *
   */
  setCurrentTab(isSelected) {
    this.setState({
      productReviewsSelected:
      isSelected,
    });
  }


  moreReviewsClick() {
    this.setState({ seeMoreReviewsIsClicked: true });
  }

  render() {
    const { productReviewTotal, shopReviewTotal } = this.props;
    const {
      productReviews, shopReviews, productReviewsSelected, seeMoreReviewsIsClicked, reviewPhotos,
    } = this.state;

    return (
      <div className='review-container'>
        <div className="review-tabs">
          <button
            type="button"
            className={`review-button ${productReviewsSelected ? 'active-button' : 'non-active-button'}`}
            onClick={() => this.setState({ productReviewsSelected: true })}
          >
            Reviews for this item
            <span className='review-data'>
              {productReviewTotal}
            </span>
          </button>
          <button
            type="button"
            className={`review-button ${!productReviewsSelected ? 'active-button' : 'non-active-button'}`}
            onClick={() => this.setState({ productReviewsSelected: false })}
          >
            Reviews for this shop
            <span className='review-data'>{shopReviewTotal}</span>
          </button>
        </div>
        {/* If product reviews selected render product reviews */}
        {(productReviewsSelected) ? [
          <Reviews getReviews={this.getFirstFourReviews} reviews={productReviews} />,
          (productReviews.length > 4 && !seeMoreReviewsIsClicked)
            ? <div className='see-more-container'><button className="more-reviews-button" type="button" onClick={() => this.moreReviewsClick()}>See More Reviews</button></div> : null,
          (seeMoreReviewsIsClicked)
            ? <Reviews getReviews={this.getRestOfReviews} reviews={productReviews} /> : null,
        ] : [
        // If shopReviews is selected:

          <Reviews getReviews={this.getFirstFourReviews} reviews={shopReviews} />,
          (shopReviews.length > 4 && !seeMoreReviewsIsClicked) ? <div className='see-more-container'><button className="more-reviews-button" type="button" onClick={() => this.moreReviewsClick()}>See More Reviews</button></div> : null,
          (seeMoreReviewsIsClicked)
            ? <Reviews getReviews={this.getRestOfReviews} reviews={shopReviews} /> : null,
        ]}
        {/* Picture Carousel here */}
      </div>
    );
  }
}
// TODO: Create component for this Reviews Component
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
