import React from 'react';
import visionBannerBg from '../../assets/vision-banner-bg.jpg';
import { FiEye } from 'react-icons/fi';
import '../../styles/AboutStyles/Vision.css'; // Make sure this import is present

const Vision = () => {
  return (
    <div className="vision-page bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      {/* Vision Banner Section */}
      <div
        className="vision-banner relative w-full h-48 sm:h-64 md:h-80 lg:h-96 bg-cover bg-center flex items-center justify-center p-4 overflow-hidden"
        style={{ backgroundImage: `url(${visionBannerBg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center bg-yellow-500 rounded-lg px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 shadow-lg transform skew-x-[-10deg] text-center sm:text-left">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display uppercase tracking-widest mr-0 sm:mr-4 mb-2 sm:mb-0 skew-x-[10deg] banner-title">
            Vision
          </h1>
          <div className="bg-blue-600 rounded-full p-2 md:p-3 flex items-center justify-center shadow-md skew-x-[10deg]">
            <FiEye className="text-white text-2xl md:text-3xl lg:text-4xl" />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        {/* IMPORTANT: Ensure 'list-none' is present here and there are no other list-related classes that might conflict */}
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
    </div>
  );
};

export default Vision;