import React from 'react';
import usePollution from '../hooks/usePollution';

const Navbar = () => {
  usePollution();
  return (
    <nav>
      <p>X</p>
      <h1>Latin Air&#39;s Pollution</h1>
    </nav>
  );
};

export default Navbar;
