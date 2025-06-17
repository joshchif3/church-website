import React from 'react';
import missionBannerBg from '../../assets/mission-banner-bg.jpg';
import { FiTarget } from 'react-icons/fi';

import '../../styles/AboutStyles/Mission.css';

const Mission = () => {
  return (
    <div className="mission-page bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">

      {/* This outer div primarily provides horizontal padding for the banner area */}
      {/* The banner's width and centering are now fully controlled by Mission.css */}
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
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display uppercase tracking-widest mr-0 sm:mr-4 mb-2 sm:mb-0 skew-x-[10deg] banner-title">
              Mission
            </h1>
            <div className="bg-purple-700 rounded-full p-2 md:p-3 flex items-center justify-center shadow-md skew-x-[10deg]">
              <FiTarget className="text-white text-2xl md:text-3xl lg:text-4xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Content Section - This section still retains its max-width and centering */}
      <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        <p className="mission-text text-center text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed text-gray-800 dark:text-gray-200">
          Filled with Holy Spirit, we evangelize, heal the sick and prepare our members for our Lord Jesus Christ’s second coming.
        </p>
      </div>
    </div>
  );
};

export default Mission;