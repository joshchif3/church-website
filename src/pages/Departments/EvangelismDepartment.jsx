import React from 'react';
import { motion } from 'framer-motion';
import '../../styles/DepartmentsStyles/EvangelismDepartment.css'; // Import the new CSS file

const EvangelismDepartment = () => {
  return (
    <div className="evangelism-department-page">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="evangelism-department-container"
      >
        {/* Banner Section (Text-based) */}
        <div className="evangelism-department-banner-section">
          <div className="evangelism-department-banner-overlay">
            <h1 className="evangelism-department-banner-text">EVANGELISM DEPARTMENT</h1>
          </div>
        </div>

        {/* Content Section */}
        <div className="evangelism-department-content">
          <h2 className="section-subtitle">Evangelism Department</h2>
          <p className="section-paragraph">
            The Evangelism Department is dedicated to winning or reviving personal commitment to the Lordship of Jesus Christ among all individuals. Its mission involves developing, promoting, and supporting various forms and phases of evangelism within the local community and among the church membership, aiming to foster church growth.
          </p>

          <h3 className="section-heading">Activities of the Department:</h3>
          <p className="section-paragraph">
            Activities of the department include organizing national and provincial crusades aimed at soul harvesting and church planting. These initiatives are essential for reaching areas not yet covered by the church, including remote or rural regions, through events such as “Let’s go remote/rural areas with the gospel,” commonly known as “Handeyi Nevhangeri Kumusha.”
          </p>

          <h3 className="section-heading">National Evangelism Leaders:</h3>
          <ul className="leadership-list">
            <li>Rev Matambanadzo: National Evangelism Leader</li>
            <li>Rev Machengete: National Evangelism Secretary</li>
            <li>Rev Majachani: National Evangelism Committee Member</li>
            <li>Rev Mashezha: National Evangelism Committee Member</li>
            <li>Mrs Tivafukidze: National Evangelism Committee Member</li>
          </ul>

          <p className="section-paragraph">
            The Evangelism Department plays a crucial role in the church’s outreach efforts, striving to bring more individuals into a personal relationship with Jesus Christ and facilitating the expansion of the church’s presence and impact.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default EvangelismDepartment;