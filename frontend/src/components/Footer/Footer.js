import React from 'react';
import { FaTimes, FaStar, FaHeart } from 'react-icons/fa';
import './Footer.css';  // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-buttons">
        <button className="footer-button reject">
          <FaTimes />
        </button>
        <button className="footer-button favorite">
          <FaStar />
        </button>
        <button className="footer-button like">
          <FaHeart />
        </button>
      </div>
    </footer>
  );
};

export default Footer;