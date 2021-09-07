import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendFilter } from '../../redux/pollution/pollution';
import Headline from './Headline';
import MainCountry from './MainCountry';
import options from './options';

const HomePage = () => {
  const selectStatus = useSelector((state) => state.pollution.selectStatus);
  const dispatch = useDispatch();
  const handleFilter = (target) => {
    dispatch(sendFilter(target));
  };

  return (
    <div className="bg-dribble min-h-screen">
      <Headline />
      <div className="bg-category px-6 sm:px-10 md:px-14 lg:px-20 py-1">
        <div className="container mx-auto flex">
          <h2 className="font-lato text-sm lg:text-base text-white uppercase lg:py-2">Air Pollution by Air Quality:</h2>
          <select
            name="category"
            defaultValue={selectStatus}
            onChange={(e) => handleFilter(e.target.value)}
            className="w-16 mx-4 pl-2 font-lato text-lg uppercase"
          >
            {options.map((option) => (
              <option
                key={option.id}
                value={option.text}
              >
                {option.text}
              </option>
            ))}

          </select>
        </div>
      </div>
      <MainCountry />
    </div>
  );
};

export default HomePage;
