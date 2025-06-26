import React from 'react';
import { motion } from 'framer-motion';
import '../../styles/DepartmentsStyles/YouthDepartment.css'; // Import the new CSS file

// Import the banner image from your assets
import youthDepartmentBanner from '../../assets/youth-department-banner.png'; //

const YouthDepartment = () => {
  return (
    <div className="youth-department-page">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="youth-department-container"
      >
        {/* Banner Section */}
        <div className="youth-department-banner-section">
          <img
            src={youthDepartmentBanner} // Use your banner image here
            alt="Youth Department Banner"
            className="youth-department-banner-image"
          />
          <div className="youth-department-banner-overlay">
           
          </div>
        </div>

        {/* Content Section */}
        <div className="youth-department-content">
          <h2 className="section-subtitle">Youth Department</h2>
          <p className="section-paragraph">
            Membership in the Youth Department is open to all church members aged between 18 and 40 years. The department’s objectives include:
          </p>
          <ul className="objectives-list">
            <li>Nurturing the spiritual gifts and talents of young individuals for service to the Lord.</li>
            <li>Providing spiritual education and character formation according to the Word of God.</li>
            <li>Mobilizing funds to support the department’s and the church’s objectives.</li>
            <li>Establishing and managing AFM fellowship groups in educational institutions and schools nationwide.</li>
          </ul>

          <h3 className="section-heading">Activities of the Department</h3>
          <p className="section-paragraph">
            The department organizes assembly, provincial, and national conferences, with annual conferences held in April at the Rufaro Conference Centre in Masvingo. Other activities include:
          </p>
          <ul className="activities-list">
            <li>Youth leadership seminars</li>
            <li>Presidential Sports Cups</li>
            <li>Talent showcases</li>
            <li>Youth Choral Competitions</li>
            <li>Youth Business Dinners</li>
          </ul>

          <h3 className="section-heading">National Youth Committee</h3>
          <ul className="committee-list">
            <li>Rev T Muroyiwa: National Youth Leader</li>
            <li>Rev Gogwe: National Youth Secretary</li>
            <li>Elder Ndlovu: National Youth Treasurer</li>
            <li>Rev K Tashu: National Youth Committee Member</li>
            <li>Rev B Mhandu: National Youth Committee Member</li>
          </ul>

          <p className="section-paragraph">
            The Youth Department actively engages young church members, providing opportunities for spiritual growth, leadership development, and social interaction, thus contributing to the overall mission and objectives of the church.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default YouthDepartment;