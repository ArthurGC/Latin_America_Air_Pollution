import React from 'react';
import Headline from './Headline';
import MainCountry from './MainCountry';

const HomePage = () => (
  <>
    <Headline />
    <h2 className="font-prox font-normal">Air Pollution by Country</h2>
    <MainCountry />
  </>
);

export default HomePage;
