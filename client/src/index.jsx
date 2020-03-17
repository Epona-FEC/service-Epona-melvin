import React from 'react';
import ReactDOM from 'react-dom';

import Review from './components/Review.jsx';

const App = () => (
  <div>
    <Review />
  </div>
);
ReactDOM.render(<App />, document.getElementById('service'));
