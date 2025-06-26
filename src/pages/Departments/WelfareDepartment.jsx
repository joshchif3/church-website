import React from 'react';
import { motion } from 'framer-motion';
import '../../styles/DepartmentsStyles/WelfareDepartment.css'; // Import the new CSS file

// Import the banner image from your assets
import welfareDepartmentBanner from '../../assets/welfare-department-banner.png'; //

const WelfareDepartment = () => {
  return (
    <div className="welfare-department-page">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="welfare-department-container"
      >
        {/* Banner Section */}
        <div className="welfare-department-banner-section">
          <img
            src={welfareDepartmentBanner} //
            alt="Welfare Department Banner"
            className="welfare-department-banner-image"
          />
          <div className="welfare-department-banner-overlay">
          
          </div>
        </div>

        {/* Content Section */}
        <div className="welfare-department-content">
          <h2 className="section-subtitle">The Welfare Department</h2>
          <p className="section-paragraph">
            The welfare department is an arm of the church with responsibility to care for and serve the poor and needy members within the church primarily, and others in the community it is located.
          </p>

          <h3 className="section-heading">Our Goals:</h3>
          <ul className="goals-list">
            <li>To assist members of the church in need of assistance to meet their basic needs.</li>
            <li>To reach out to needy children & adults, male and female, irrespective of nationality or background, within and outside the church, to extend the love of God to them as much as we can.</li>
            <li>To periodically support needy members of the community with basic necessities through established charities /shelters, within our means by distributing foodstuffs, clothing, blankets, towels, toiletries, etc.</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default WelfareDepartment;