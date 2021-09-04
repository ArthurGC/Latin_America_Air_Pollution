import React from 'react';
import Latin from '../../assets/Latin.png';

const Headline = () => (
  <div data-testid="headlineSection">
    <div>
      <img src={Latin} alt="Latin America map" />
    </div>
    <h2 data-testid="headlineTitle">Latin America</h2>
  </div>
);

export default Headline;
