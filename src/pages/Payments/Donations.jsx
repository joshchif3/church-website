import React from 'react';
import { motion } from 'framer-motion';
// Removed: import { FiCreditCard, FiDollarSign, FiMail } from 'react-icons/fi';
// The FaBank import was already commented out, keeping it removed.

import '../../styles/Payments/Donations.css'; // CORRECTED CSS file import path

// Assuming these images are in your src/assets folder
// You need to ensure these paths are correct based on your actual file structure
import donationsBanner from '../../assets/donations-banner.png'; // Adjust path if needed
import cdfPaymentOptions from '../../assets/donationDetails.jpg'; // Adjust path if needed

const Donations = () => { // Renamed component from Payments to Donations
  return (
    <div className="donations-page-container"> {/* Updated class name */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="donations-content-wrapper" // Updated class name
      >
        {/* Banner Image */}
        <div className="donations-banner-section"> {/* Updated class name */}
          <img
            src={donationsBanner} // Use imported image
            alt="Donations Banner"
            className="donations-banner-image" // Updated class name
          />
          {/* This text is part of the image in the screenshot, but if it's dynamic, you can place it here */}
          {/* <h1 className="donations-banner-text">DONATIONS</h1> */}
        </div>

        {/* "FOR DONATIONS" text */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="for-donations-heading"
        >
          FOR DONATIONS
        </motion.h2>

        {/* Big image with CDF Payment Options and bank details */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="cdf-payment-image-container"
        >
          <img
            src={cdfPaymentOptions} // Use imported image
            alt="CDF Payment Options"
            className="cdf-payment-image"
          />
        </motion.div>

        {/* Placeholder for any other dynamic content or detailed text if needed */}
        {/*
        <div className="donations-details-section">
          <p>Here you can add more detailed information about donations if the image doesn't cover everything, or additional payment methods.</p>
        </div>
        */}

      </motion.div>
    </div>
  );
};

export default Donations; // Exporting the renamed component