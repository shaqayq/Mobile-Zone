import React from 'react';
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
import mobile from '../assests/mobile.png';
import '../style/navbar.css';

const Navbar = () => (
  <>
    <nav className="navbar shadow-sm p-3 mb-5 bg-white rounded">
      <img src={mobile} className="logo" alt="LOGO" />
      <h4 className="title">Mobile Zone</h4>
      <i>
        {' '}
        <FaInstagram />
        {' '}
      </i>
      <i><FaTwitter /></i>
      <i><FaFacebook /></i>

    </nav>
  </>
);

export default Navbar;
