import React from 'react';
import PropTypes from 'prop-types';

const DetailsPage = ({ name, air, components }) => (
  <div className="bg-dribble py-1 min-h-screen">
    <div className="">
      <div className="bg-head py-4">
        <h2 className="font-lato font-black text-xl text-white text-center uppercase">{name}</h2>
        <p className="font-lato font-normal text-base text-white text-center">{`Air quality index: ${air}`}</p>
      </div>
      <p className="bg-category font-lato text-sm text-white uppercase px-6 py-2">Air&#39;s components:</p>
      <ul>
        <li className="flex justify-between px-6 py-4 row">
          <p className="font-lato font-bold text-base text-white">Co</p>
          <p className="font-lato font-normal text-base text-white">{`${components.co} μg/m3`}</p>
        </li>
        <li className="flex justify-between px-6 py-4 row">
          <p className="font-lato font-bold text-base text-white">No</p>
          <p className="font-lato font-normal text-base text-white">{`${components.no} μg/m3`}</p>
        </li>
        <li className="flex justify-between px-6 py-4 row">
          <p className="font-lato font-bold text-base text-white">No2</p>
          <p className="font-lato font-normal text-base text-white">{`${components.no2} μg/m3`}</p>
        </li>
        <li className="flex justify-between px-6 py-4 row">
          <p className="font-lato font-bold text-base text-white">O3</p>
          <p className="font-lato font-normal text-base text-white">{`${components.o3} μg/m3`}</p>
        </li>
        <li className="flex justify-between px-6 py-4 row">
          <p className="font-lato font-bold text-base text-white">SO2</p>
          <p className="font-lato font-normal text-base text-white">{`${components.so2} μg/m3`}</p>
        </li>
        <li className="flex justify-between px-6 py-4 row">
          <p className="font-lato font-bold text-base text-white">PM25</p>
          <p className="font-lato font-normal text-base text-white">{`${components.pm2_5} μg/m3`}</p>
        </li>
        <li className="flex justify-between px-6 py-4 row">
          <p className="font-lato font-bold text-base text-white">PM10</p>
          <p className="font-lato font-normal text-base text-white">{`${components.pm10} μg/m3`}</p>
        </li>
        <li className="flex justify-between px-6 py-4 row">
          <p className="font-lato font-bold text-base text-white">NH3</p>
          <p className="font-lato font-normal text-base text-white">{`${components.nh3} μg/m3`}</p>
        </li>
      </ul>
    </div>
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
