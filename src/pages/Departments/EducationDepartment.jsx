import React from 'react';
import { motion } from 'framer-motion';
import '../../styles/DepartmentsStyles/EducationDepartment.css'; // Import the new CSS file

// If you get an image for the banner later, you can import it here:
 import educationDepartmentBanner from '../../assets/education-department-banner.png';

const EducationDepartment = () => {
  return (
    <div className="education-department-page">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="education-department-container"
      >
        {/* Banner Section */}
        <div className="education-department-banner-section">
          {/* If you have an image, uncomment the line below and replace the src */}
          {/* <img
            src={educationDepartmentBanner}
            alt="Education Department Banner"
            className="education-department-banner-image"
          /> */}
          <div className="education-department-banner-overlay">
            <h1 className="education-department-banner-text">EDUCATION DEPARTMENT</h1>
          </div>
        </div>

        {/* Content Section */}
        <div className="education-department-content">
          <h2 className="section-subtitle">Mission Statement:</h2>
          <p className="section-paragraph">
            In its commitment to impart knowledge to the community it serves, the AFM in Zimbabwe has established various educational institutions across the country.
          </p>
          <blockquote className="bible-verse">
            <p>
              “My people are destroyed from lack of knowledge. Because you have rejected knowledge, I also reject you as my priests; because you have ignored the law of your God, I also will ignore your children.”
            </p>
            <p className="verse-reference">– Hosea 4:6 (NKJV)</p>
          </blockquote>

          <h3 className="section-heading">Education Department Overview:</h3>
          <p className="section-paragraph">
            The Education Department holds responsibility over all theological and secular educational institutions, programs, and activities within the AFM in Zimbabwe.
          </p>

          <h3 className="section-heading">National Education Department Leadership:</h3>
          <ul className="leadership-list">
            <li>National Education Leader: Elder Mataranyika</li>
            <li>National Education Secretary: Mrs. Mhunduru</li>
            <li>National Education Treasurer: Elder Mwandiedza</li>
            <li>National Education Director: Dr. C Gomba</li>
            <li>National Education Committee Member: Dr. C Murefu</li>
            <li>National Education Committee Member: Prof Machingura</li>
            <li>National Education Committee Member: Dr. Makaya</li>
            <li>National Education Committee Member: Elder Mhuma</li>
            <li>National Education Committee Member: Prof Mapuranga</li>
            <li>National Education Committee Member: Deacon Munatsi</li>
            <li>National Education Committee Member: Rev T Ncube</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default EducationDepartment;