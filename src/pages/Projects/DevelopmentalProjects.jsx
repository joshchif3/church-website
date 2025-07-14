import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoCloseCircleOutline } from 'react-icons/io5'; // For the close button on the modal

import '../../styles/Projects/DevelopmentalProjects.css'; // Import the new CSS file

// Import your banner image
import developmentalProjectsBanner from '../../assets/develop-projects-banner.png'; //

// Import the images for the "Conference Center Paving" section.
// You'll need to ensure these image files exist in your src/assets/ folder.
// For now, I'm using placeholder names. Please replace them with your actual image paths.
import pavingImage1 from '../../assets/dev-project-1.jpg'; // Example: src/assets/dev-project-1.jpg
import pavingImage2 from '../../assets/dev-project-2.jpg'; // Example: src/assets/dev-project-2.jpg
import pavingImage3 from '../../assets/dev-project-3.jpg'; // Example: src/assets/dev-project-3.jpg


const pavingImages = [
  { id: 1, src: pavingImage1, alt: 'Conference Center Paving 1' },
  { id: 2, src: pavingImage2, alt: 'Conference Center Paving 2' },
  { id: 3, src: pavingImage3, alt: 'Conference Center Paving 3' },
];

const DevelopmentalProjects = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="developmental-projects-page-container">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="developmental-projects-content-wrapper"
      >
        {/* Banner Section */}
        <div className="developmental-projects-banner-section">
          <img
            src={developmentalProjectsBanner} //
            alt="Development Projects Banner"
            className="developmental-projects-banner-image"
          />
          {/* The "DEVELOPMENT PROJECTS" text is part of the banner image in your screenshot,
              but if you want it as separate text, you could add it here with styling. */}
          {/* <h1 className="developmental-projects-banner-text">DEVELOPMENT PROJECTS</h1> */}
        </div>

        {/* "Conference Center Paving" Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="conference-paving-heading"
        >
          Conference Center Paving
        </motion.h2>

        {/* Image Gallery */}
        <div className="paving-image-gallery">
          {pavingImages.map((image) => (
            <motion.div
              key={image.id}
              className="paving-thumbnail-container"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              onClick={() => openModal(image)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="paving-thumbnail-image"
              />
            </motion.div>
          ))}
        </div>

      </motion.div>

      {/* Image Modal/Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="image-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal} // Close when clicking outside the image
          >
            <motion.div
              className="image-modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image
            >
              <button className="modal-close-button" onClick={closeModal}>
                <IoCloseCircleOutline size={36} />
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="modal-full-image"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DevelopmentalProjects;