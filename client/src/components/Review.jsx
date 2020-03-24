/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const Review = ({ product, review, reviewer, renderStars }) => {
  const { name, id } = product;
  const { avatar, username } = reviewer;
  const { date, score, body } = review;

  return (
    <div className="review">
      {/* Possible Component to Refactor */}
      <div className='review-info'>
        <img className='avatar' src={avatar} alt={`${username}'s avatar`} />
        <a className='reviewer-name review-link' href={`/users/${username}`}>
          { username }
        </a>
        <em className='review-date'>{ moment(date).format('MMM DD, YYYY')}</em>
      </div>
      {/* ====== */}
      <div className='review-body'>
        <div className='review-data'>
          <div className='review-score'>
            { score }
          </div>
          <span className='review-text'>{body}</span>
        </div>
        <img className='review-photo' src={review.photoUrl} alt={`${username} added a photo of their purchase`} />
        {/* Shopowner Div HERE  TODO: REPLY */}
        <div className='review-product-data'>
          <span>Purchased item:</span>
          <div>
            <img className='product-icon' src={product.photoUrl} alt={name} />
            <a href={`/listing/${id}`} className='review-link'>
              { name }
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
Review.propTypes = {

  product: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
    photoUrl: PropTypes.string,
  }),
  review: PropTypes.shape({
    date: PropTypes.instanceOf(Date),
    score: PropTypes.number,
    body: PropTypes.string,
    photoUrl: PropTypes.string,
  }),
  reviewer: PropTypes.shape({
    avatar: PropTypes.string,
    username: PropTypes.string,
  }),
  renderStars: PropTypes.function
};

Review.defaultProps = {
  product: {
    name: 'A Cool Product',
    id: 1,
    photoUrl: 'https://picsum.photos/id/237/200/300',
  },
  review: {
    date: new Date('Tue Mar 17 2020 16:08:19 GMT-0700 (Pacific Daylight Time)'),
    score: 5,
    body: 'This a test',
    photoUrl: 'https://picsum.photos/id/237/200/300',
  },
  reviewer: {
    avatar: 'http://www.gravatar.com/avatar/?d=identicon',
    username: 'Melvin',
  },

};

export default Review;
