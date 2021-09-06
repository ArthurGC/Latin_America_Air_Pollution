import React from 'react';
import Headline from './Headline';
import MainCountry from './MainCountry';

const HomePage = () => (
  <>
    <Headline />
    <div className="bg-category px-6 py-1">
      <div className="container mx-auto">
        <h2 className="font-lato text-sm text-white uppercase">Air Pollution by Country:</h2>
      </div>
    </div>
    <MainCountry />
  </>
);

export default HomePage;
