import React from 'react';
import { motion } from 'framer-motion';
import { FaYoutube } from 'react-icons/fa'; // Import the YouTube icon
import '../../styles/GalleryStyles/Videos.css'; // Import the new CSS file
// Assuming you have an image for the banner
import videosBanner from '../../assets/videos-banner.png'; // Path to your banner image

const Videos = () => {
  const youtubeChannelUrl = "https://www.youtube.com/@afmmedia8094"; // Placeholder URL

  return (
    <div className="videos-page">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="videos-container"
      >
        {/* Banner Section */}
        <div className="videos-banner-section">
          <img
            src={videosBanner} // Use your banner image here
            alt="Videos Banner"
            className="videos-banner-image"
          />
          {/* Removed the h1 with "VIDEOS" text */}
          <div className="videos-banner-overlay">
            {/* The overlay will now only darken the image slightly */}
          </div>
        </div>

        {/* YouTube Section */}
        <div className="youtube-section">
          <h2 className="youtube-title">AFM IN ZIMBABWE YOUTUBE</h2>
          <motion.a
            href={youtubeChannelUrl}
            target="_blank" // Opens in a new tab
            rel="noopener noreferrer" // Security best practice
            className="youtube-icon-link"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaYoutube className="youtube-icon" />
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default Videos;