import React from 'react';
import visionBannerBg from '../../assets/vision-banner-bg.jpg';
// FiEye is no longer used, so it's removed from imports.
// import { FiEye } from 'react-icons/fi';

import '../../styles/AboutStyles/Vision.css'; // Make sure this import is present

const Vision = () => {
  return (
    <div className="vision-page bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      {/* Vision Banner Section - Now purely a background image with an overlay */}
      <div
        className="vision-banner relative w-full h-48 sm:h-64 md:h-80 lg:h-96 bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${visionBannerBg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        {/* All content (text, icon) inside the banner has been removed */}
      </div>

      {/* Content Section - Applying consistent styling */}
      <div className="vision-content container mx-auto px-4 py-12">
        <h3 className="vision-section-header">Our Vision</h3>
        <section className="vision-section">
          <div className="vision-list-container">
            <ul className="vision-list list-none space-y-6 text-base md:text-lg lg:text-xl leading-relaxed text-gray-800 dark:text-gray-200 font-sans">
              <li className="vision-list-item flex items-start">
                <span className="bullet-point text-yellow-500 mr-3 text-2xl leading-none">&bull;</span>
                <span>To proclaim the gospel of salvation to the entire world through our words and deeds.</span>
              </li>
              <li className="vision-list-item flex items-start">
                <span className="bullet-point text-yellow-500 mr-3 text-2xl leading-none">&bull;</span>
                <span>To baptize those who believe in water in the name of the Father, Son, and Holy Spirit.</span>
              </li>
              <li className="vision-list-item flex items-start">
                <span className="bullet-point text-yellow-500 mr-3 text-2xl leading-none">&bull;</span>
                <span>To pray for converts and prepare them for Holy Spirit baptism with evidence of speaking in tongues.</span>
              </li>
              <li className="vision-list-item flex items-start">
                <span className="bullet-point text-yellow-500 mr-3 text-2xl leading-none">&bull;</span>
                <span>To heal the sick in the name of Jesus Christ. To make disciples and equip them for ministry.</span>
              </li>
              <li className="vision-list-item flex items-start">
                <span className="bullet-point text-yellow-500 mr-3 text-2xl leading-none">&bull;</span>
                <span>To prepare the members for the second coming of our Lord Jesus Christ through teaching, prayer, fasting, education, fellowship, counselling, assisting the needy in society, and performing various works of faith.</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Vision;