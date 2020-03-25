import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import ReviewContainer from './components/ReviewContainer.jsx';
import HalfStar from './components/HalfStar.jsx';
import EmptyStar from './components/EmptyStar.jsx';
import FullStar from './components/FullStar.jsx';

const renderStarRatings = (score) => {
  const stars = [];
  let currentScore = score;
  for (let i = 0; i < 5; i += 1) {
    if (Math.sign(currentScore) === 1 && currentScore >= 1) {
      stars.push(<span><FullStar /></span>);
    } else if (currentScore <= 0) {
      stars.push(<span><EmptyStar /></span>);
    } else if (currentScore < 1 && !Number.isInteger(currentScore - 1) && currentScore > 0) {
      stars.push(<span><HalfStar /></span>);
      currentScore -= currentScore;
    }

    currentScore -= 1;
  }
  return stars;
};

const ReviewService = ({ serviceId }) => (
  <div className='review-service'>
    <ReviewContainer productId={serviceId} renderStars={(score) => renderStarRatings(score)} />
  </div>
);

ReviewService.propTypes = {
  serviceId: PropTypes.number,
};

ReviewService.defaultProps = {
  serviceId: 4,
};

const { serviceId } = window;
ReactDOM.render(<ReviewService serviceId={serviceId} />, document.getElementById('app3'));
