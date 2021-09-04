import React from 'react';
import { FaAngleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import usePollution from '../hooks/usePollution';

const Navbar = () => {
  usePollution();
  return (
    <nav data-testid="navbarContainer">
      <Link to="/"><FaAngleLeft /></Link>
      <h1 data-testid="navbarTitle">Latin Air&#39;s Pollution</h1>
    </nav>
  );
};

export default Navbar;
