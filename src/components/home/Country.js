/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Country = ({ name, air }) => (
  <Link to={`/${name}`}>
    <div data-testid="countryCategory">
      <img src={require(`../../assets/${name}.png`).default} alt={`${name}'s map`} />
    </div>
    <h2 data-testid="countryTitle">{name}</h2>
    <p data-testid="countryAirQuality">{air}</p>
  </Link>
);

Country.propTypes = {
  name: PropTypes.string.isRequired,
  air: PropTypes.string.isRequired,
};

export default Country;
