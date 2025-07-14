// src/pages/AboutUS/Provinces.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaLandmark } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link
import '../../styles/AboutStyles/Provinces.css'; // This is the correct CSS path for the grid
import provincesData from '../../data/provincesData'; // Import the data

const Provinces = () => {
  const provinces = provincesData; // Use the imported data

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="provinces-page">
      <div className="provinces-header">
        <h1 className="provinces-title">PROVINCES</h1>
      </div>

      <motion.div
        className="provinces-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {provinces.map((province) => (
          <motion.div key={province.id} className="province-card" variants={itemVariants}>
            {/* Make the entire card clickable and link to the detail page */}
            <Link to={`/about-us/provinces/${province.id}`} className="province-card-link">
              <FaLandmark className="province-icon" />
              <h2 className="province-name">{province.name}</h2>
            </Link>
          </motion.div>
        ))}
      </motion.div>

    
    </div>
  );
};

export default Provinces;