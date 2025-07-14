// src/pages/Provinces/ProvinceDetail.jsx
import React from 'react';
import { motion } from 'framer-motion';
// import { useParams } from 'react-router-dom'; // No need for useParams if provinceData is passed directly as prop
// import provincesData from '../../data/provincesData'; // No need to import here if provinceData is passed directly

import '../styles/ProvinceDetail.css'; // New CSS file for ProvinceDetail

const ProvinceDetail = ({ provinceData }) => {
  // If provinceData is not passed as a prop (e.g., direct navigation),
  // you might fetch it using useParams and provincesData. However, in our App.js,
  // we are passing the specific province object, so this check is for safety.
  if (!provinceData) {
    return <div className="province-detail-error">Province data not available.</div>;
  }

  const { name, overseer, overseerImage, about, bio } = provinceData;

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.2 } },
  };

  return (
    <div className="province-detail-page">
      <motion.div
        className="province-detail-container"
        initial="hidden"
        animate="visible"
        variants={contentVariants}
      >
        <h1 className="province-detail-title">{name.toUpperCase()}</h1>
        <div className="province-detail-content-wrapper">
          <div className="province-detail-leader-section">
            <h3 className="province-overseer-label">Overseer: <span className="province-overseer-name">{overseer}</span></h3>
            {overseerImage && (
              <motion.img
                src={overseerImage}
                alt={`${overseer} - Overseer of ${name}`}
                className="province-leader-image"
                variants={imageVariants}
              />
            )}
            {bio && bio.length > 0 && (
              <div className="province-overseer-bio">
                <h4 className="province-bio-heading">Overseer's Bio</h4>
                <ul className="province-bio-list">
                  {bio.map((item, index) => (
                    <li key={index} className="province-bio-item">{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="province-detail-about-section">
            <h3 className="province-about-heading">About Us</h3>
            <ul className="province-about-list">
              {about.map((item, index) => (
                <li key={index} className="province-about-item">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProvinceDetail;