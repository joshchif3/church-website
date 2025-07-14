import React from 'react';
import { motion } from 'framer-motion';

import '../../styles/Payments/Tithe.css'; // Import the new CSS file

// You'll need to provide the actual paths to your Tithe-specific images
// For now, I'm using placeholder paths. Assume they are in src/assets.
import titheBanner from '../../assets/tithe-banner.png'; // e.g., 'src/assets/images/tithe-banner.jpg'
import tithePaymentDetails from '../../assets/tithe-payment-details.jpg'; // e.g., 'src/assets/images/tithe-payment-details.jpg'

const Tithe = () => {
  return (
    <div className="tithe-page-container">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="tithe-content-wrapper"
      >
        {/* Banner Image for Tithe */}
        <div className="tithe-banner-section">
          <img
            src={titheBanner} // Use imported tithe banner image
            alt="Tithe Banner"
            className="tithe-banner-image"
          />
        </div>

        {/* "FOR TITHE" text */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="for-tithe-heading"
        >
          FOR TITHE
        </motion.h2>

        {/* Big image with Tithe Payment Options and bank details */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="tithe-payment-image-container"
        >
          <img
            src={tithePaymentDetails} // Use imported tithe payment details image
            alt="Tithe Payment Options"
            className="tithe-payment-image"
          />
        </motion.div>

        {/* Optional: Add a section for additional dynamic text if needed */}
        {/*
        <div className="tithe-details-section">
          <p>This is where you can put additional information specific to tithe, if it's not already on the image.</p>
        </div>
        */}

      </motion.div>
    </div>
  );
};

export default Tithe;