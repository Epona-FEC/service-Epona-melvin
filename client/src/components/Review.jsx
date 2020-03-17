import React from 'react';
import PropTypes from 'prop-types';

const Review = ({
  reviewerName, reviewDate, reviewScore, reviewBody, photoUrl, photoDescription, product, productId,
}) => (
  <div>
    {/* Icon */}
    <button className='reviewer-name' onClick={() => console.log('hello')} type='button'>
      { reviewerName }
    </button>

    <em className='review-date'>{ reviewDate.toString() }</em>
    <div className='review-score'>
      { reviewScore }
    </div>
    <div className='review-body'>
      {reviewBody}
      <div>
        {/* If photo exists create img tag */}
        <img src={photoUrl} alt={photoDescription} />
      </div>
    </div>
    <div>
      {/* Shopowner Div HERE */}
      <span>Purchased item:</span>
      <div className='review-product-data'>
        {/* Image for product purchased here */}
        <a href={`/listing/${productId}`}>
          { product }
        </a>
      </div>
    </div>
  </div>
);

Review.propTypes = {
  reviewerName: PropTypes.string,
  reviewDate: PropTypes.instanceOf(Date),
  reviewScore: PropTypes.number,
  reviewBody: PropTypes.string,
  photoUrl: PropTypes.string,
  photoDescription: PropTypes.string,
  product: PropTypes.string,
  productId: PropTypes.number,
};

Review.defaultProps = {
  reviewerName: 'Melvin',
  reviewDate: new Date(),
  reviewScore: 5,
  reviewBody: 'This is default text',
  photoUrl: 'http:',
  photoDescription: 'Review stuff',
  product: 'Test Data',
  productId: 1,
};

export default Review;
