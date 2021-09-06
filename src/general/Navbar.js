import React from 'react';
import { FaAngleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import usePollution from '../hooks/usePollution';

const Navbar = () => {
  usePollution();
  return (
    <header className="fixed w-full z-10 px-6 sm:px-10 md:px-14 lg:px-20 py-3 md:py-4 lg:py-6">
      <nav data-testid="navbarContainer" className="container mx-auto grid grid-cols-6">
        <Link to="/" className="text-white justify-self-start"><FaAngleLeft className="h-7 md:h-9" /></Link>
        <p data-testid="navbarTitle" className="font-gill text-xl lg:text-2xl text-white col-span-4 place-self-center pt-1">Latin&#39;s Air Pollution</p>
      </nav>
    </header>
  );
};

export default Navbar;
