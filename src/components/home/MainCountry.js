import React from 'react';
import Country from './Country';

const MainCountry = () => (
  <div>
    <Country name="Peru" air={5} />
    <Country name="Argentina" air={1} />
    <Country name="Chile" air={2} />
    <Country name="Brasil" air={3} />
  </div>
);

export default MainCountry;
