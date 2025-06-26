import React from 'react';
import { motion } from 'framer-motion';
import '../../styles/DepartmentsStyles/ChildrensMinistry.css'; // Import the new CSS file

// Import the banner image from your assets
import childrensMinistryBanner from '../../assets/childrens-ministry-banner.png'; //
// Import the Children's Ministry Leader image
import childrensMinistryLeaderImage from '../../assets/leaders/CHILDREN_MINISTRY.png'; //


const ChildrensMinistry = () => {
  return (
    <div className="childrens-ministry-page">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="childrens-ministry-container"
      >
        {/* Banner Section */}
        <div className="childrens-ministry-banner-section">
          <img
            src={childrensMinistryBanner} //
            alt="Children's Ministry Banner"
            className="childrens-ministry-banner-image"
          />
          <div className="childrens-ministry-banner-overlay">
           
          </div>
        </div>

        {/* Content Section */}
        <div className="childrens-ministry-content">
          <h2 className="section-subtitle">CHILDREN’S MINISTRY / DEPARTMENT</h2>
          <p className="section-paragraph">
            The Children’s Ministry/Department warmly welcomes all members under the age of eighteen. Children below the legal age of majority are supported by their parents or guardians in exercising rights and fulfilling duties within the department.
          </p>

          <h3 className="section-heading">Purpose</h3>
          <ul className="purpose-list">
            <li>To lead children to the Kingdom of God by helping them accept the Lord Jesus Christ as their Lord and Saviour.</li>
            <li>To recommend water baptism for children who meet the necessary criteria.</li>
            <li>To encourage children to seek the Baptism of the Holy Spirit.</li>
            <li>To facilitate and nurture the children’s spiritual growth, equipping them for ministry within the Church.</li>
            <li>To edify the children and shape their spiritual character in accordance with the Word of God.</li>
            <li>To proclaim the Gospel of Jesus Christ through the Children’s Ministry.</li>
            <li>To mobilize funding to support the ministry’s activities and the broader Church’s needs.</li>
          </ul>

          <h3 className="section-heading">Activities</h3>
          <p className="section-paragraph">
            To achieve its purpose, the department will undertake various activities, including:
          </p>
          <ul className="activities-list">
            <li>Conducting weekly children’s services, commonly referred to as Sunday School.</li>
            <li>Organizing an Annual Conference at Rufaro Conference Centre.</li>
            <li>Training educators or teachers dedicated to the department.</li>
            <li>Researching current trends in Christian Children Education for implementation by the Department.</li>
          </ul>

          <h3 className="section-heading">National Leaders</h3>
          <ul className="committee-list">
            <li>Rev Mupereki: National CMD Leader</li>
            <li>Elder Rafomoyo: National CMD Secretary</li>
            <li>Elder Njera: National CMD Treasurer</li>
          </ul>
        </div>

        {/* Leader Image Section */}
        <div className="leader-image-section">
          <motion.img
            src={childrensMinistryLeaderImage} //
            alt="Pastor Mupereki - AFM in Zimbabwe National Children Ministry Superintendent"
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

export default ChildrensMinistry;