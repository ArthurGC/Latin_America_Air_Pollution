import React from 'react';
import { useSelector } from 'react-redux';
import Country from './Country';

const MainCountry = () => {
  const countries = useSelector((state) => state.pollution);
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5">
      {countries.map((country) => (
        <Country
          key={country.id}
          name={country.name}
          air={country.air}
          data-testid="row"
        />
      ))}
    </div>
  );
};

export default MainCountry;
