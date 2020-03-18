import React from 'react';
import ReactDOM from 'react-dom';

import ProductStats from './components/ProductStats.jsx';
import ReviewContainer from './components/ReviewContainer.jsx';

const App = () => (
  <div>
    <ProductStats />
    <ReviewContainer />
  </div>
);
ReactDOM.render(<App />, document.getElementById('service'));
