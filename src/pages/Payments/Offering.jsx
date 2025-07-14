import React from 'react';
import { motion } from 'framer-motion';

import '../../styles/Payments/Offering.css'; // Import the new CSS file

// You'll need to provide the actual paths to your Offering-specific images.
// Assuming they are directly in src/assets/.
import offeringBanner from '../../assets/offering-banner.png'; // e.g., 'src/assets/offering-banner.jpg'
import offeringDetailsImage from '../../assets/offering-details.jpg'; // e.g., 'src/assets/offering-details.jpg'

const Offering = () => {
  return (
    <div className="offering-page-container">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="offering-content-wrapper"
      >
        {/* Banner Image for Offering */}
        <div className="offering-banner-section">
          <img
            src={offeringBanner} // Use imported offering banner image
            alt="Offering Banner"
            className="offering-banner-image"
          />
        </div>

        {/* "FOR OFFERINGS" text */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="for-offerings-heading"
        >
          FOR OFFERINGS
        </motion.h2>

        {/* Big image with offering details */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="offering-details-image-container"
        >
          <img
            src={offeringDetailsImage} // Use imported offering details image
            alt="Offering Details"
            className="offering-details-image"
          />
        </motion.div>

        {/* Optional: Add a section for additional dynamic text if needed */}
        {/*
        <div className="offering-info-section">
          <p>This section can provide more context or instructions for offerings.</p>
        </div>
        */}

      </motion.div>
    </div>
  );
};

export default Offering;