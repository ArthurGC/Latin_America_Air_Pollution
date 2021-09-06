import React from 'react';
import Headline from './Headline';
import MainCountry from './MainCountry';

const HomePage = () => (
  <div className="bg-dribble min-h-screen">
    <Headline />
    <div className="bg-category px-6 sm:px-10 md:px-14 lg:px-20 py-1">
      <div className="container mx-auto">
        <h2 className="font-lato text-sm lg:text-base text-white uppercase lg:py-2">Air Pollution by Country:</h2>
      </div>
    </div>
    <MainCountry />
  </div>
);

export default HomePage;
