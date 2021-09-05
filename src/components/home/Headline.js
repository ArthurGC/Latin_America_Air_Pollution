import React from 'react';
import Latin from '../../assets/Latin.png';

const Headline = () => (
  <div className="bg-dribble px-6 py-2">
    <div data-testid="headlineSection" className="container mx-auto flex items-center justify-center gap-4">
      <div className="flex-1">
        <img src={Latin} alt="Latin America map" className="opacity-30 max-h-32 mx-auto" />
      </div>
      <div className="flex-1">
        <h2 data-testid="headlineTitle" className="font-lato font-black text-base text-white text-right uppercase">Latin America</h2>
        <p className="font-lato font-normal text-base text-white text-right">Air quality index 3</p>
      </div>
    </div>
  </div>
);

export default Headline;
