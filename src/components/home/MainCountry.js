import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Loading from '../../Loader/Loading';
import Country from './Country';

const MainCountry = () => {
  const [isLoad, setLoad] = useState(false);
  const countries = useSelector((state) => state.pollution);
  const isData = countries.length > 0;

  useEffect(() => {
    if (isData === false) {
      setTimeout(() => {
        setLoad(true);
      }, 2000);
    } else {
      setLoad(true);
    }
  }, []);

  return (
    <>
      {!isLoad && (
        <Loading />
      )}
      {isLoad && (
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
      )}
    </>
  );
};

export default MainCountry;
