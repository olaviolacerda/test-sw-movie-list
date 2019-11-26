import React from 'react';

import './styles.scss';

import logo from '../../assets/images/logo.png';

export default function Navbar() {
  return (
    <nav>
      <img src={logo} alt="Star Wars Logo" />
    </nav>
  );
}
