import { motion } from 'framer-motion';
import { FiMenu, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import '../styles/header.css';

const Header = ({ menuOpen, setMenuOpen }) => {
  return (
    <header className="header">
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
    </header>
  );
};

export default Header;