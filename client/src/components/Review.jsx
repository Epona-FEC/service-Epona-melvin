/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import PropTypes from 'prop-types';

const Review = ({ product, review, reviewer }) => {
  const { name, id } = product;
  const { avatar, username } = reviewer;
  const { date, score, body } = review;
  return (
    <div>
      <img src={avatar} alt={`${username}'s avatar`} />
      <a className='reviewer-name' href={`/users/${username}`}>
        { username }
      </a>

      <em className='review-date'>{ date.toString() }</em>
      <div className='review-score'>
        { score }
      </div>
      <div className='review-body'>
        {body}
        <div>
          <img src={review.photoUrl} alt={`${username} added a photo of their purchase`} />
        </div>
      </div>
      <div>
        {/* Shopowner Div HERE  TODO: REPLY */}
        <span>Purchased item:</span>
        <div className='review-product-data'>
          <img className='product-icon' src={product.photoUrl} alt={name} />
          <a href={`/listing/${id}`}>
            { name }
          </a>
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
