/* eslint-disable class-methods-use-this */
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import sampleData from '../../sampleData';
import ImageCarousel from './ImageCarousel.jsx';
import ProductStats from './ProductStats.jsx';

import Review from './Review.jsx';

import '../style.css';

class ReviewContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productReviews: {},
      seeMoreReviewsIsClicked: false,
      shopReviews: [],
      productReviewsSelected: true,
      reviewPhotos: [
        {
          url: 'https://source.unsplash.com/random/180x180',
          description: 'Purchase of a customer',
        },
        {
          url: 'https://source.unsplash.com/random/180x180',
          description: 'Purchase of a customer',
        },
        {
          url: 'https://source.unsplash.com/random/180x180',
          description: 'Purchase of a customer',
        },
        {
          url: 'https://source.unsplash.com/random/180x180',
          description: 'Purchase of a customer',
        },
        {
          url: 'https://source.unsplash.com/random/180x180',
          description: 'Purchase of a customer',
        },
      ],
      productReviewTotal: 25,
      shopReviewTotal: 50,
      shopAvgScore: 0,
      carouselTransform: 0,
      carouselWidth: null,
      loading: true,
    };
    this.getFirstFourReviews = this.getFirstFourReviews.bind(this);
    this.displayPrevImages = this.displayPrevImages.bind(this);
    this.displayNextImages = this.displayNextImages.bind(this);
    this.moreReviewsClick = this.moreReviewsClick.bind(this);
    this.getRestOfReviews = this.getRestOfReviews.bind(this);
  }

  componentDidMount() {
    const { reviewPhotos } = this.state;
    const { productId } = this.props;
    // Maxwidth is 810px and 16px margin
    const carouselWidth = Math.ceil(reviewPhotos.length / 4) * 840;
    this.setState({ carouselWidth });
    axios(`http://ec2-54-183-28-128.us-west-1.compute.amazonaws.com:3003/listing/${productId}`)
      .then(({ data }) => Promise.resolve(this.setState({
        productReviews: data.productReviews,
        shopReviews: data.shopReviews,
      })))
      .then(() => Promise.resolve(this.setState((state) => {
        const photos = [];
        state.productReviews.forEach((review) => {
          if (review.ReviewPhoto !== null) {
            photos.push({
              url: review.ReviewPhoto.url,
              description: review.ReviewPhoto.description,
            });
          }
        });
        let totalShopScore = 0;
        state.shopReviews.forEach((review) => {
          totalShopScore += review.score;
        });

        return {
          productReviewTotal: state.productReviews.length,
          shopReviewTotal: state.shopReviews.length,
          reviewPhotos: photos,
          shopAvgScore: totalShopScore / state.shopReviews.length,
        };
      })))
      .then(()=>this.setState({loading:false}))
      .catch((err) => {
        console.error(err);
      });
  }

  getFirstFourReviews(reviews) {
    const { renderStars } = this.props;
    const firstFour = [];
    for (let i = 0; i < 4; i += 1) {
      const reviewData = reviews[i];
      if (reviews[i] === undefined) {
        break;
      } else {
        console.log(reviewData);
        firstFour.push(<Review
          review={{body: reviewData.body, photoUrl: reviewData.ReviewPhoto.url, score: reviewData.score, date: reviewData.date }}
          product={reviewData.Product}
          reviewer={{
            avatar: reviewData.reviewer.photoUrl,
            username: reviewData.reviewer.name,
          }}
          renderStars={renderStars}
        />);
      }
    }
    return firstFour;
  }

  getRestOfReviews(reviews) {
    const { renderStars } = this.props;
    const rest = [];
    for (let i = 4; i < 20; i += 1) {
      const reviewData = reviews[i];
      if (reviews[i] === undefined) {
        break;
      } else {
        rest.push(<Review
          review={reviewData}
          product={reviewData.Product}
          reviewer={{
            avatar: reviewData.reviewer.photoUrl,
            username: reviewData.reviewer.name,
          }}
          renderStars={renderStars}
        />);
      }
    }
    return rest;
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

  /**
   * Changes translateX value dynamically on carousel-slide class to the left
   */
  displayPrevImages() {
    const { carouselTransform } = this.state;
    if (carouselTransform === 0) {
      return;
    }
    this.setState((prevState) => ({
      carouselTransform: prevState.carouselTransform + 840,
      carouselWidth: prevState.carouselWidth + 840,
    }));
  }

  /**
   * Changes translateX value dynamically on carousel-slide class to the right
   */
  displayNextImages() {
    const { carouselWidth } = this.state;
    // Stops if reaches the end of carousel
    if (carouselWidth - 840 === 0) {
      return;
    }
    this.setState((prevState) => ({
      carouselTransform: prevState.carouselTransform - 840,
      carouselWidth: prevState.carouselWidth - 840,
    }));
  }

  render() {
    const { renderStars } = this.props;
    const {
      productReviewTotal, shopReviewTotal, loading,
      productReviews, shopReviews, productReviewsSelected,
      seeMoreReviewsIsClicked, reviewPhotos, carouselTransform, shopAvgScore,
    } = this.state;

    return (loading)? <div></div>:(
      <div className='review-container'>
        <ProductStats renderStars={renderStars} totalShopReviews={shopReviewTotal} reviewScore={ shopAvgScore } />
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
          // Render Reviews component with shopReviews
          <Reviews getReviews={this.getFirstFourReviews} reviews={shopReviews} />,
          (shopReviews.length > 4 && !seeMoreReviewsIsClicked) ? <div className='see-more-container'><button className="more-reviews-button" type="button" onClick={this.moreReviewsClick}>See More Reviews</button></div> : null,
          (seeMoreReviewsIsClicked)
            ? <Reviews getReviews={this.getRestOfReviews} reviews={shopReviews} /> : null,
        ]}
        {/* Picture Carousel here */}
        <ImageCarousel
          photos={reviewPhotos}
          styles={{ transform: `translateX(${carouselTransform}px)` }}
          slideInPrevImages={this.displayPrevImages}
          slideInNextImages={this.displayNextImages}
        />
      </div>
    );
  }
}
// TODO: Create component for this Reviews Component
const Reviews = ({ getReviews, reviews }) => getReviews(reviews).map((data) => data);

ReviewContainer.propTypes = {
  renderStars: PropTypes.func,
  productId: PropTypes.number,
};

ReviewContainer.defaultProps = {
  renderStars: () => null,
  productId: 5,
};

export default ReviewContainer;
