import React from 'react';
import Latin from '../../assets/Latin.png';

const Headline = () => (
  <div className="bg-dribble px-8">
    <div data-testid="headlineSection" className="container mx-auto">
      <div>
        <img src={Latin} alt="Latin America map" />
      </div>
      <h2 data-testid="headlineTitle">Latin America</h2>
    </div>
  </div>
);

export default Headline;
