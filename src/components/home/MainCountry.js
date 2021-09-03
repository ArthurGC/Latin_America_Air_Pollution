import React from 'react';
import { useSelector } from 'react-redux';
import Country from './Country';

const MainCountry = () => {
  const countries = useSelector((state) => state.pollution);
  return (
    <div>
      {countries.map((country) => (
        <Country
          key={country.id}
          name={country.name}
          air={country.air}
        />
      ))}
      {/* <Country name="Peru" air={5} />
      <Country name="Argentina" air={1} />
      <Country name="Chile" air={2} />
      <Country name="Brasil" air={3} /> */}
    </div>
  );
};

export default MainCountry;
