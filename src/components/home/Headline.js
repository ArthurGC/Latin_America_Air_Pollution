import React from 'react';
import Latin from '../../assets/Latin.png';

const Headline = () => (
  <div className="bg-head px-6 sm:px-10 md:px-14 lg:px-20 py-2 pt-14 sm:py-6 md:pt-20 lg:py-8 lg:pt-24">
    <div data-testid="headlineSection" className="container mx-auto flex items-center justify-center gap-4">
      <div className="flex-1">
        <img src={Latin} alt="Latin America map" className="opacity-30 max-h-32 sm:max-h-36 md:max-h-44 xl:max-h-48 mx-auto" />
      </div>
      <div className="flex-1">
        <h2 data-testid="headlineTitle" className="font-lato font-black text-xl lg:text-2xl text-white text-right uppercase">Latin America</h2>
        <p className="font-lato font-normal text-base lg:text-lg text-white text-right">Air quality index 3</p>
      </div>
    </div>
  </div>
);

export default Headline;
