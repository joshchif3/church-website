import React from 'react';
import { motion } from 'framer-motion';

import '../../styles/Payments/BankingDetails.css'; // Import the new CSS file

// You'll need to provide the actual paths to your Banking Details specific images.
// For now, I'm using placeholder paths. Assume they are in src/assets.
import bankingDetailsBanner from '../../assets/banking-details-banner.png'; // e.g., 'src/assets/banking-details-banner.jpg'
import bankDetailsImage from '../../assets/bank-details-info.jpg'; // e.g., 'src/assets/bank-details-info.jpg'

const BankingDetails = () => {
  return (
    <div className="banking-details-page-container">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="banking-details-content-wrapper"
      >
        {/* Banner Image for Banking Details */}
        <div className="banking-details-banner-section">
          <img
            src={bankingDetailsBanner} // Use imported banking details banner image
            alt="Banking Details Banner"
            className="banking-details-banner-image"
          />
        </div>

        {/* "BANK DETAILS" text */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="for-bank-details-heading"
        >
          BANK DETAILS
        </motion.h2>

        {/* Big image with bank account details */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="bank-details-image-container"
        >
          <img
            src={bankDetailsImage} // Use imported bank details image
            alt="Bank Account Details"
            className="bank-details-image"
          />
        </motion.div>

        {/* Optional: Add a section for additional dynamic text if needed */}
        {/*
        <div className="banking-details-info-section">
          <p>Here you can add any supplementary text regarding banking information.</p>
        </div>
        */}

      </motion.div>
    </div>
  );
};

export default BankingDetails;