import React from 'react';
import ReactDOM from 'react-dom';

import ProductStats from './components/ProductStats.jsx';
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


const App = () => (
  <div>
    <ReviewContainer renderStars={(score)=>renderStarRatings(score)} />
  </div>
);
ReactDOM.render(<App />, document.getElementById('app3'));
