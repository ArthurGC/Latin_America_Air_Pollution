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
    </div>
  );
};

export default MainCountry;
