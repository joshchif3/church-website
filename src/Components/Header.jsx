import { motion } from 'framer-motion';
// FiMenu, FiChevronDown, FiChevronUp are not used in this component, can be removed if not needed elsewhere
import '../styles/header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-container">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <h1 className="header-title">AFM Church</h1>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;