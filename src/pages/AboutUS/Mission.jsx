import React from 'react';
import missionBannerBg from '../../assets/mission-banner-bg.jpg';
import { FiTarget } from 'react-icons/fi'; // Keep FiTarget as per original

import '../../styles/AboutStyles/Mission.css';

const Mission = () => {
  return (
    <div className="mission-page bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">

      {/* This outer div primarily provides horizontal padding for the banner area */}
      <div className="px-4 py-8">
        {/* The banner div itself, now explicitly styled via CSS */}
        <div
          className="mission-banner rounded-lg shadow-xl overflow-hidden relative" // Tailwind for visual effects, CSS for dimensions/bg
          style={{ backgroundImage: `url(${missionBannerBg})` }}
        >
          {/* Overlay for better text contrast */}
          <div className="absolute inset-0 bg-black opacity-40"></div>

          {/* Content (Mission Title and Icon) - Centered within the banner */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center bg-green-600 rounded-lg px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 shadow-lg transform skew-x-[-10deg] text-center sm:text-left">
          
          </div>
        </div>
      </div>

      {/* Main Content Area - Styled to match History page */}
      <div className="mission-content container mx-auto px-4 py-12">
        <h3 className="mission-section-header">Our Mission Statement</h3>
        <section className="mission-section">
          <div className="mission-text-container">
            <p className="mission-text">
              Filled with Holy Spirit, we evangelize, heal the sick and prepare our members for our Lord Jesus Christ's second coming.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Mission;