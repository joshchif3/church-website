import React from 'react';
import { motion } from 'framer-motion';

import '../../styles/Projects/YearPlanner.css';

// Import your banner image from the screenshot.
import yearPlannerBanner from '../../assets/year-planner-banner.png'; //


import nationalCalendarImage from '../../assets/afm-national-calendar.jpg'; // Placeholder for the actual calendar image

const YearPlanner = () => {
  return (
    <div className="year-planner-page-container">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="year-planner-content-wrapper"
      >
        {/* Banner Section */}
        <div className="year-planner-banner-section">
          <img
            src={yearPlannerBanner} //
            alt="Year Planner Banner"
            className="year-planner-banner-image"
          />
        </div>

        {/* Big image with the National Calendar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="national-calendar-image-container"
        >
          <img
            src={nationalCalendarImage} // Use your actual calendar image here
            alt="AFM in Zimbabwe National Calendar"
            className="national-calendar-image"
          />
        </motion.div>

        {/* Optional: Add a section for additional dynamic text if needed */}
        {/*
        <div className="year-planner-info-section">
          <p>Further details or specific events for the year can be listed here.</p>
        </div>
        */}

      </motion.div>
    </div>
  );
};

export default YearPlanner;