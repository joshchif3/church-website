import React from 'react';
import { motion } from 'framer-motion';

import '../../styles/Projects/FuturePlans.css'; // Import the new CSS file

// You'll need to provide the actual path to your Future Plans banner image.
// Example: import futurePlansBanner from '../../assets/future-plans-banner.jpg';
import futurePlansBanner from '../../assets/future-plans-banner.png'; // Placeholder path

const FuturePlans = () => {
  return (
    <div className="future-plans-page-container">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="future-plans-content-wrapper"
      >
        {/* Banner Section for Future Plans */}
        <div className="future-plans-banner-section">
          <img
            src={futurePlansBanner}
            alt="Future Plans Banner"
            className="future-plans-banner-image"
          />
        </div>

        {/* You can add a heading or introductory text here if desired */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="future-plans-main-heading"
        >
          Our Future Vision
        </motion.h2>

        {/* This is where you would add details about your future plans later */}
        <div className="future-plans-details-section">
          <p>
            Details about upcoming projects, ministry expansions, and long-term goals will be shared here.
            Stay tuned for updates on how we plan to grow and serve our community.
          </p>
          {/* Add more content, lists, or images as your plans evolve */}
        </div>

      </motion.div>
    </div>
  );
};

export default FuturePlans;