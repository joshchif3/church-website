import { motion } from 'framer-motion';
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiYoutube,
  FiMapPin,
  FiPhone,
  FiMail
} from 'react-icons/fi';
import '../styles/footer.css';

const Footer = ({ darkMode }) => {
  return (
    <footer className={`footer ${darkMode ? 'footer-dark' : ''}`}>
      <div className="footer-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="footer-grid"
        >
          {/* Church Info */}
          <div className="footer-section">
            <h3>AFM Church</h3>
            <p>
              Bringing faith, hope and love to our community through the gospel of Jesus Christ.
            </p>
            <div className="space-y-2">
              <div className="footer-info">
                <FiMapPin className="footer-icon" />
                <span>123 Faith Avenue, Spiritual City</span>
              </div>
              <div className="footer-info">
                <FiPhone className="footer-icon" />
                <span>(123) 456-7890</span>
              </div>
              <div className="footer-info">
                <FiMail className="footer-icon" />
                <span>info@afmchurch.org</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Sermons</a></li>
              <li><a href="#">Events</a></li>
            </ul>
          </div>

          {/* Departments */}
          <div className="footer-section">
            <h3>Departments</h3>
            <ul>
              <li><a href="#">Youth Ministry</a></li>
              <li><a href="#">Children's Church</a></li>
              <li><a href="#">Women's Fellowship</a></li>
              <li><a href="#">Men's Ministry</a></li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div className="footer-section">
            <h3>Connect With Us</h3>
            <div className="social-icons">
              <a href="#" aria-label="Facebook"><FiFacebook /></a>
              <a href="#" aria-label="Twitter"><FiTwitter /></a>
              <a href="#" aria-label="Instagram"><FiInstagram /></a>
              <a href="#" aria-label="YouTube"><FiYoutube /></a>
            </div>
            <div>
              <h4>Service Times</h4>
              <ul>
                <li>Sunday: 9:00 AM & 11:00 AM</li>
                <li>Wednesday: 7:00 PM Bible Study</li>
                <li>Friday: 7:00 PM Youth Service</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} AFM Church. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
