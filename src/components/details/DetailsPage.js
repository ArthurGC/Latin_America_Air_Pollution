import React from 'react';
import PropTypes from 'prop-types';

const DetailsPage = ({ name, air, components }) => (
  <div>
    <div>
      <h2>{name}</h2>
      <p>{air}</p>
    </div>
    <p>Air&#39;s components</p>
    <ul>
      <li>
        <p>Co</p>
        <p>{components.co}</p>
      </li>
      <li>
        <p>No</p>
        <p>{components.no}</p>
      </li>
      <li>
        <p>No2</p>
        <p>{components.no2}</p>
      </li>
      <li>
        <p>O3</p>
        <p>{components.o3}</p>
      </li>
      <li>
        <p>SO2</p>
        <p>{components.so2}</p>
      </li>
      <li>
        <p>PM25</p>
        <p>{components.pm2_5}</p>
      </li>
      <li>
        <p>PM10</p>
        <p>{components.pm10}</p>
      </li>
      <li>
        <p>NH3</p>
        <p>{components.nh3}</p>
      </li>
    </ul>
  </div>
);

DetailsPage.propTypes = {
  name: PropTypes.string.isRequired,
  air: PropTypes.string.isRequired,
  components: PropTypes.shape({
    co: PropTypes.number.isRequired,
    no: PropTypes.number.isRequired,
    no2: PropTypes.number.isRequired,
    o3: PropTypes.number.isRequired,
    so2: PropTypes.number.isRequired,
    pm2_5: PropTypes.number.isRequired,
    pm10: PropTypes.number.isRequired,
    nh3: PropTypes.number.isRequired,
  }).isRequired,
};

export default DetailsPage;
