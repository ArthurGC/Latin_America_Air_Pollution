/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Country = ({ name, air }) => (
  <Link to={`/${name}`}>
    <div>
      <img src={require(`../../assets/${name}.png`).default} alt={`${name}'s map`} />
    </div>
    <h2>{name}</h2>
    <p>{air}</p>
  </Link>
);

Country.propTypes = {
  name: PropTypes.string.isRequired,
  air: PropTypes.string.isRequired,
};

export default Country;
