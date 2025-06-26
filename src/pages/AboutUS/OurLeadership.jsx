import React, { useState } from 'react';
import leadershipBannerBg from '../../assets/leadership-banner-bg.png';
import { FiUsers, FiChevronDown, FiChevronUp, FiX } from 'react-icons/fi'; // Import FiX for the close button
import { motion, AnimatePresence } from 'framer-motion'; // Import motion and AnimatePresence for animations

// Import leader images
import presidentImage from '../../assets/leaders/President.jpg';
import ladiesLeaderImage from '../../assets/leaders/Ladies_leader.jpg';
import ladiesTreasurerImage from '../../assets/leaders/National-ladies-treasurer.jpg';
import childrenMinistryImage from '../../assets/leaders/CHILDREN_MINISTRY.png';
import treasurerImage from '../../assets/leaders/treasure.jpg';
// Add any other leader images you have here, e.g.:
// import otherLeaderImage1 from '../../assets/leaders/OtherLeader1.jpg';
// import otherLeaderImage2 from '../../assets/leaders/OtherLeader2.jpg';


import '../../styles/AboutStyles/OurLeadership.css';

const OurLeadership = () => {
  const [openSections, setOpenSections] = useState({});
  const [selectedImage, setSelectedImage] = useState(null); // State to hold the image to display in modal
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const toggleSection = (sectionName) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionName]: !prev[sectionName],
    }));
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const leadershipData = {
    "NATIONAL ADVISORY COUNCIL MEMBERS – ADVISORY ROLE": [
      "Rev T I Murefu: Chairman",
      "Rev J Nyabadza: Secretary",
      "Rev Dr Maposa: Treasurer",
    ],
    "NATIONAL EXECUTIVE BOARD MEMBERS – ENSURING GOVERNANCE": [
      "Bishop AD Madawo: President",
      "Rev C Mupakaidzwa: Deputy President",
      "Rev SG Ganyau: Secretary General",
      "Elder G Chikuni: Interim Treasurer General",
      "Elder M Shumba: Head of Social Welfare",
      "Elder W Mataranyika: Head of Education",
      "Rev E Matambanadzo: Head of Evangelism",
      "Rev Vusango: Legal Advisor",
      "Elder F Mahachi: National Employment Board",
      "Elder Chiwaridzo: Head Adjudication",
      "Rev Gwenzi",
      "Rev Katakwa",
      "Rev Maphosa",
      "Elder Wadi",
      "Elder Mudhikwa",
      "Elder Matembo",
      "Rev Buns",
    ],
    "NATIONAL MANAGEMENT COMMITTEE MEMBERS – IMPLEMENTATION STAGE": [
      "Bishop AD Madawo: President",
      "Rev SG Ganyau: Secretary General",
      "Elder G Chikuni: Interim Treasurer General",
      "Mrs. Madawo: National Ladies Leader",
      "Mrs. Musasa: National Ladies Secretary",
      "Mrs. Katakwa: National Ladies Treasurer",
      "Rev Muroyiwa: National Youth Leader",
      "Rev Gogwe: National Youth Secretary",
      "Elder Ndhlovu: National Youth Treasurer",
      "Pastor Mupereki: National Children's Dep. Superintendent",
      "Elder Rafomoyo: National Secretary Children's Department",
      "Elder Njera: National Treasurer Children's Department",
      "Mrs. Mhunduru: Director of Social Welfare",
      "Dr. C Gomba: Acting Director of Education",
    ],
    "PROVINCIAL OVERSEER'S AND PROVINCES – PROVINCIAL LEADERS": [
      "Bulawayo West: Rev Kawonde",
      "Bulawayo North: Rev Jinjika",
      "Bulawayo South: Rev Ndhlovu",
      "Harare West: Rev Muzarurwi",
      "Harare East: Rev Nehanda",
      "Harare North: Rev Charukwa",
      "Harare South: Rev Musasa",
      "Harare Central: Rev Majachani",
      "Mvurwi: Rev Rusere",
      "Ruwa: Rev Chacha",
      "Chitungwiza West: Rev Maeresera",
      "Chitungwiza East: Rev Nyereyemhuka",
      "Manicaland East: Rev Mandewo",
      "Manicaland South: Rev Bunza",
      "Manicaland North: Rev Moyo",
      "Manicaland Central: Rev Samambwa",
      "Midlands South: Rev Mesinire",
      "Midlands Central: Rev Ganyau",
      "Midlands North: Rev Magejo",
      "Midlands East: Rev Gondo",
      "Chinhoyi: Rev Gadzikwa",
      "Mashonaland East: Rev Nyamande",
      "Mashonaland Central: Rev Zvavahera",
      "Mashonaland North: Rev Shumbambiri",
      "Mashonaland West: Rev Ruzvidzo",
      "Masvingo: Rev Enock Matambanadzo",
      "Lowveld: Rev James Matambanadzo",
      "Matebeleland North: Rev Handiseni",
      "Matebeleland East: Rev Maphosa",
      "Matebeleland South: Rev Moyo",
      "Chivhu: Rev Nzombe",
      "Gokwe: Rev Mutumda",
    ],
  };

  const leaderImages = [
    { src: presidentImage, alt: "Bishop AD Madawo: President", caption: "Bishop AD Madawo - President" },
    { src: ladiesLeaderImage, alt: "National Ladies Leader", caption: "Mrs. Madawo - National Ladies Leader" },
    { src: ladiesTreasurerImage, alt: "National Ladies Treasurer", caption: "Mrs. Katakwa - National Ladies Treasurer" },
    { src: childrenMinistryImage, alt: "National Children's Dep. Superintendent", caption: "Pastor Mupereki - Children's Dept. Supt." },
    { src: treasurerImage, alt: "Elder G Chikuni: Interim Treasurer General", caption: "Elder G Chikuni - Interim Treasurer General" },
    // Add other leaders with their respective images and captions
    // { src: otherLeaderImage1, alt: "Description of Other Leader 1", caption: "Other Leader 1 - Role" },
    // { src: otherLeaderImage2, alt: "Description of Other Leader 2", caption: "Other Leader 2 - Role" },
  ];

  return (
    <div className="leadership-page bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">

      {/* Full-width Banner Section */}
      <div
        className="leadership-banner"
        style={{ backgroundImage: `url(${leadershipBannerBg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 text-left px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Our Leadership</h1>
          <div className="flex items-center justify-start">
            <FiUsers className="text-white text-3xl mr-3" />
            <p className="text-xl md:text-2xl text-white opacity-90">Guiding with Vision and Purpose</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="section-header">OUR LEADERSHIP STRUCTURE</h2>

        {/* Accordion Sections */}
        <div className="mb-16">
          {Object.entries(leadershipData).map(([sectionTitle, members]) => (
            <div key={sectionTitle} className="accordion-item">
              <button
                className="accordion-header"
                onClick={() => toggleSection(sectionTitle)}
              >
                <span>{sectionTitle}</span>
                {openSections[sectionTitle] ? (
                  <FiChevronUp className="text-xl" />
                ) : (
                  <FiChevronDown className="text-xl" />
                )}
              </button>
              {openSections[sectionTitle] && (
                <div className="accordion-content">
                  <ul className="space-y-2">
                    {members.map((member, index) => (
                      <li key={index} className="dark:text-gray-300">{member}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Leader Pictures Section */}
        <h2 className="section-header">KEY LEADERSHIP</h2>
        <div className="leader-pictures-container">
          <div className="leader-pictures-grid">
            {leaderImages.map((leader, index) => (
              <div
                key={index}
                className="leader-image-wrapper"
                onClick={() => handleImageClick(leader)} // Add click handler
              >
                <img
                  src={leader.src}
                  alt={leader.alt}
                  className="leader-image"
                />
                <p className="leader-caption">{leader.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Modal (with Framer Motion for animation) */}
      <AnimatePresence>
        {isModalOpen && selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="image-modal-overlay"
            onClick={handleCloseModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="image-modal-content"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal content
            >
              <button className="image-modal-close" onClick={handleCloseModal}>
                <FiX />
              </button>
              <img src={selectedImage.src} alt={selectedImage.alt} />
              <p className="leader-caption text-center">{selectedImage.caption}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OurLeadership;