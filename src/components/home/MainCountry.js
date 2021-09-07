import React from 'react';
import { useSelector } from 'react-redux';
import Country from './Country';

const MainCountry = () => {
  const countries = useSelector((state) => state.pollution.filtered);
  const isData = countries.length > 0;

  return (
    <>
      {!isData && (
      <div className="font-gill text-2xl lg:text-3xl text-white text-center mt-10 px-4">There are not any country with that air quality now.</div>
      )}
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
    </>
  );
};

export default MainCountry;
