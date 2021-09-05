import React from 'react';
import { FaAngleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import usePollution from '../hooks/usePollution';

const Navbar = () => {
  usePollution();
  return (
    <header className="bg-dribble px-6 py-3">
      <nav data-testid="navbarContainer" className="container mx-auto grid grid-cols-6">
        <Link to="/" className="text-white justify-self-start"><FaAngleLeft className="h-7" /></Link>
        <p data-testid="navbarTitle" className="font-gill text-xl text-white col-span-4 place-self-center pt-1">Latin&#39;s Air Pollution</p>
      </nav>
    </header>
  );
};

export default Navbar;
