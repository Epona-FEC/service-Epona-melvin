import React from 'react';
import ReactDOM from 'react-dom';

import ProductStats from './components/ProductStats.jsx';
import Review from './components/Review.jsx';

const App = () => (
  <div>
    <ProductStats />
    <Review />
  </div>
);
ReactDOM.render(<App />, document.getElementById('service'));
