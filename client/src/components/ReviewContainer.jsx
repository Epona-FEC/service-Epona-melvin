/* eslint-disable class-methods-use-this */
import React from 'react';
import PropTypes from 'prop-types';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';

import ReviewPhotos from './ReviewPhotos.jsx';
import Review from './Review.jsx';
import 'pure-react-carousel/dist/react-carousel.es.css';import sampleData from '../../sampleData';
class ReviewContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productReviews: sampleData,
      seeMoreReviewsIsClicked: false,
      shopReviews: [1, 2, 3, 4, 5, 7, 8, 20],
      selectedReviews: 'product',
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

  moreReviewsClick() {
    this.setState({ seeMoreReviewsIsClicked: true });
  }

  render() {
    const { productReviewTotal, shopReviewTotal } = this.props;
    const {
      productReviews, shopReviews, selectedReviews, seeMoreReviewsIsClicked, reviewPhotos,
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
        <CarouselProvider
          naturalSlideWidth={1}
          naturalSlideHeight={1}
          totalSlides={Math.floor(reviewPhotos.length / 4)}
        >
          <Slider>
            <Slide index={0}>
              <ReviewPhotos photos={this.getFourPhotos(0)} />
            </Slide>
          </Slider>
          <ButtonBack>Back</ButtonBack>
          <ButtonNext>Next</ButtonNext>
        </CarouselProvider>
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
