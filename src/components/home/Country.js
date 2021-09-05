/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Country = ({ name, air }) => (
  <Link to={`/${name}`} className="bg-dribble flex flex-col items-center gap-4 p-4">
    <div data-testid="countryCategory" className="">
      <img src={require(`../../assets/${name}.png`).default} alt={`${name}'s map`} className="opacity-30 max-h-28" />
    </div>
    <div className="min-w-full">
      <h2 data-testid="countryTitle" className="font-lato font-black text-sm text-white text-right uppercase">{name}</h2>
      <p data-testid="countryAirQuality" className="font-lato font-normal text-base text-white text-right">{`AQI: ${air}`}</p>
    </div>
  </Link>
);

Country.propTypes = {
  name: PropTypes.string.isRequired,
  air: PropTypes.string.isRequired,
};

export default Country;
