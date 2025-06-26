import React from 'react';
import { motion } from 'framer-motion';
// Removed FaGlobe, FaPhoneAlt, FaMapMarkerAlt as they are no longer needed for text beside the image
import '../../styles/DepartmentsStyles/LadiesDepartment.css';

// Import the banner image from your assets
import ladiesDepartmentBanner from '../../assets/ladies-department-banner.png';
// Import the Ladies Leader image
import ladiesLeaderImage from '../../assets/leaders/Ladies_leader.jpg';

const LadiesDepartment = () => {
  return (
    <div className="ladies-department-page">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="ladies-department-container"
      >
        {/* Banner Section */}
        <div className="ladies-department-banner-section">
          <img
            src={ladiesDepartmentBanner} // Use your banner image here
            alt="Ladies Department Banner"
            className="ladies-department-banner-image"
          />
          <div className="ladies-department-banner-overlay">
            {/* You can add text here if needed, like:
            <h1 className="ladies-department-banner-text">Ladies Department</h1>
            */}
          </div>
        </div>

        {/* Content Section */}
        <div className="ladies-department-content">
          <h2 className="section-subtitle">AFM in Zimbabwe Ladies Ministry</h2>
          <p className="section-paragraph">
            The AFM in Zimbabwe Ladies Ministry, commonly referred to as the Ladies Department, has been serving for over 100 years, supporting and sustaining families and contributing significantly to church projects.
          </p>
          <blockquote className="scripture-quote">
            <p>“Who can find a virtuous woman? For her price is far above rubies. The heart of her husband doth safely trust in her, so that he shall have no need of spoil. She will do him good and not evil all the days of her life. She seeketh wool, and flax, and worketh willingly with her hands.”</p>
            <p className="quote-source">– Proverbs 31:10-13 (KJV)</p>
          </blockquote>

          <h3 className="section-heading">Widows & Single Mothers (WISMO) Department</h3>
          <p className="section-paragraph">
            Established in 1997 in Harare by Rev. T.I Murefu, the WISMO department aims to support widows and single mothers, providing encouragement and teaching them to live a holy life regardless of circumstances. Led by Amai Cathrine Madawo, the department encourages self-sufficiency and active participation in church projects.
          </p>

          <h3 className="section-heading">National Ladies Committee</h3>
          <ul className="committee-list">
            <li>Mrs Madawo: Leader</li>
            <li>Mrs Musasa: Secretary</li>
            <li>Mrs Katakwa: Treasurer</li>
            <li>Mrs Matekwe: Committee Member</li>
            <li>Mrs Nzombe: Committee Member</li>
          </ul>

          <h3 className="section-heading">Activities</h3>
          <ul className="activities-list">
            <li><strong>Prayer Meetings:</strong> Every Tuesday, ladies gather in provinces to pray for church leadership, women’s needs, and community peace.</li>
            <li><strong>Thursday Meetings:</strong> Regular gatherings for feminine teachings, testimony sharing, socializing, and prayer.</li>
            <li><strong>Conferences:</strong> Held at assembly, provincial, and national levels, attended by thousands of women, with testimonies of healing and miracles.</li>
            <li><strong>Community Engagement:</strong> Activities include distributing food and clothing to the less privileged and supporting bible college students.</li>
          </ul>

          <h3 className="section-heading">Aims</h3>
          <ul className="aims-list">
            <li>Promoting spiritual growth among women</li>
            <li>Recruiting members for the church</li>
            <li>Developing modern-day women according to God’s standards</li>
            <li>Instructing women on their role in promoting a Godly way of life</li>
            <li>Mobilizing funds to support department objectives and church activities.</li>
          </ul>
        </div>

        {/* Leader Profile Section - Simplified */}
        <div className="leader-image-section">
          <motion.img
            src={ladiesLeaderImage} //
            alt="Mrs Madawu - AFM in Zimbabwe National Ladies Leader"
            className="leader-full-image"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default LadiesDepartment;