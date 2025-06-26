import React, { useState } from 'react'; // Import useState
import { motion, AnimatePresence } from 'framer-motion'; // Import AnimatePresence for exit animations
import { FiX } from 'react-icons/fi'; // Icon for closing the modal
import '../../styles/GalleryStyles/Gallery.css'; // Import the new CSS file

// Import all 27 images for 2024 - Wismo Conference
// IMPORTANT: Replace these with your actual image paths
import wismo1 from '../../assets/wismo-conference/wismo-1.jpg'; //
import wismo2 from '../../assets/wismo-conference/wismo-2.jpg'; //
import wismo3 from '../../assets/wismo-conference/wismo-3.jpg'; //
import wismo4 from '../../assets/wismo-conference/wismo-4.jpg'; //
import wismo5 from '../../assets/wismo-conference/wismo-5.jpg'; //
import wismo6 from '../../assets/wismo-conference/wismo-6.jpg'; //
import wismo7 from '../../assets/wismo-conference/wismo-7.jpg'; //
import wismo8 from '../../assets/wismo-conference/wismo-8.jpg'; //
import wismo9 from '../../assets/wismo-conference/wismo-9.jpg'; //
import wismo10 from '../../assets/wismo-conference/wismo-10.jpg'; //
import wismo11 from '../../assets/wismo-conference/wismo-11.jpg'; //
import wismo12 from '../../assets/wismo-conference/wismo-12.jpg'; //
import wismo13 from '../../assets/wismo-conference/wismo-13.jpg'; //
import wismo14 from '../../assets/wismo-conference/wismo-14.jpg'; //
import wismo15 from '../../assets/wismo-conference/wismo-15.jpg'; //
import wismo16 from '../../assets/wismo-conference/wismo-16.jpg'; //
import wismo17 from '../../assets/wismo-conference/wismo-17.jpg'; //
import wismo18 from '../../assets/wismo-conference/wismo-18.jpg'; //
import wismo19 from '../../assets/wismo-conference/wismo-19.jpg'; //
import wismo20 from '../../assets/wismo-conference/wismo-20.jpg'; //
import wismo21 from '../../assets/wismo-conference/wismo-21.jpg'; //
import wismo22 from '../../assets/wismo-conference/wismo-22.jpg'; //
import wismo23 from '../../assets/wismo-conference/wismo-23.jpg'; //
import wismo24 from '../../assets/wismo-conference/wismo-24.jpg'; //
import wismo25 from '../../assets/wismo-conference/wismo-25.jpg'; //
import wismo26 from '../../assets/wismo-conference/wismo-26.jpg'; //
import wismo27 from '../../assets/wismo-conference/wismo-27.jpeg'; //


const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null); // State to hold the selected image for the modal

  const wismoConferenceImages = [
    { id: 1, src: wismo1, alt: '2024 Wismo Conference Image 1' }, //
    { id: 2, src: wismo2, alt: '2024 Wismo Conference Image 2' }, //
    { id: 3, src: wismo3, alt: '2024 Wismo Conference Image 3' }, //
    { id: 4, src: wismo4, alt: '2024 Wismo Conference Image 4' }, //
    { id: 5, src: wismo5, alt: '2024 Wismo Conference Image 5' }, //
    { id: 6, src: wismo6, alt: '2024 Wismo Conference Image 6' }, //
    { id: 7, src: wismo7, alt: '2024 Wismo Conference Image 7' }, //
    { id: 8, src: wismo8, alt: '2024 Wismo Conference Image 8' }, //
    { id: 9, src: wismo9, alt: '2024 Wismo Conference Image 9' }, //
    { id: 10, src: wismo10, alt: '2024 Wismo Conference Image 10' }, //
    { id: 11, src: wismo11, alt: '2024 Wismo Conference Image 11' }, //
    { id: 12, src: wismo12, alt: '2024 Wismo Conference Image 12' }, //
    { id: 13, src: wismo13, alt: '2024 Wismo Conference Image 13' }, //
    { id: 14, src: wismo14, alt: '2024 Wismo Conference Image 14' }, //
    { id: 15, src: wismo15, alt: '2024 Wismo Conference Image 15' }, //
    { id: 16, src: wismo16, alt: '2024 Wismo Conference Image 16' }, //
    { id: 17, src: wismo17, alt: '2024 Wismo Conference Image 17' }, //
    { id: 18, src: wismo18, alt: '2024 Wismo Conference Image 18' }, //
    { id: 19, src: wismo19, alt: '2024 Wismo Conference Image 19' }, //
    { id: 20, src: wismo20, alt: '2024 Wismo Conference Image 20' }, //
    { id: 21, src: wismo21, alt: '2024 Wismo Conference Image 21' }, //
    { id: 22, src: wismo22, alt: '2024 Wismo Conference Image 22' }, //
    { id: 23, src: wismo23, alt: '2024 Wismo Conference Image 23' }, //
    { id: 24, src: wismo24, alt: '2024 Wismo Conference Image 24' }, //
    { id: 25, src: wismo25, alt: '2024 Wismo Conference Image 25' }, //
    { id: 26, src: wismo26, alt: '2024 Wismo Conference Image 26' }, //
    { id: 27, src: wismo27, alt: '2024 Wismo Conference Image 27' }, //
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-page">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="gallery-container"
      >
        <h1 className="gallery-title">2024 - Wismo Conference</h1>

        <div className="image-grid">
          {wismoConferenceImages.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.03, zIndex: 1 }}
              transition={{ duration: 0.2 }}
              className="image-card"
              onClick={() => handleImageClick(item)} // Add onClick handler
            >
              <img
                src={item.src}
                alt={item.alt}
                className="gallery-image"
                loading="lazy"
              />
              <div className="image-overlay">
                <p className="image-description">{item.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="image-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal} // Close modal when clicking backdrop
          >
            <motion.div
              className="image-modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image itself
            >
              <button className="modal-close-button" onClick={handleCloseModal}>
                <FiX />
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="modal-image"
              />
              <p className="modal-image-description">{selectedImage.alt}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;