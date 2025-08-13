import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import '../styles/header.css';
import logo from '../assets/logo.png'; // Make sure your logo is at this path

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      {/* Top Bar Section */}
      <div className="top-bar">
        <span className="top-bar-text">JOIN US IN-PERSON & ONLINE EVERY SUNDAY AT 9AM</span>
        <div className="top-bar-social">
          <a href="#" aria-label="Facebook"><FaFacebookF /></a>
          <a href="#" aria-label="Instagram"><FaInstagram /></a>
          <a href="#" aria-label="Twitter"><FaTwitter /></a>
          <a href="#" aria-label="YouTube"><FaYoutube /></a>
        </div>
      </div>

      {/* Main Navigation Section */}
      <div className="main-nav">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="header-title-container"
        >
          <img src={logo} alt="AFM in Zimbabwe Logo" className="header-logo" />
          <div className="header-text">
            <h1 className="header-main-title">AFM</h1>
            <span className="header-subtitle">In Zimbabwe</span>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;