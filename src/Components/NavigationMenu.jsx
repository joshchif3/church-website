import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import {
  FiX, FiMenu, FiHome, FiInfo, FiImage, FiLayers,
  FiCreditCard, FiCalendar, FiUsers, FiMail
} from 'react-icons/fi';
import '../styles/NavigationMenu.css';

const NavigationMenu = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/', icon: <FiHome /> },
    { name: 'About Us', path: '/about-us', icon: <FiInfo /> },
    { name: 'Gallery', path: '/gallery', icon: <FiImage /> },
    { name: 'Departments', path: '/departments', icon: <FiLayers /> },
    { name: 'Payments', path: '/payments', icon: <FiCreditCard /> },
    { name: 'Projects', path: '/projects', icon: <FiCalendar /> },
    { name: 'Get Connected', path: '/get-connected', icon: <FiUsers /> },
    { name: 'Contact Us', path: '/contact-us', icon: <FiMail /> },
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="menu-toggle md:hidden">
        <button onClick={() => setMenuOpen(true)}>
          <FiMenu className="icon" />
        </button>
      </div>

      {/* Mobile Slide-in Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25 }}
            className="mobile-menu"
          >
            <div className="menu-header">
              <h2>Menu</h2>
              <button onClick={() => setMenuOpen(false)} className="close-btn">
                <FiX className="icon" />
              </button>
            </div>

            <nav className="mobile-nav">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Bottom Navigation */}
      <nav className="nav-container hidden md:block">
        <div className="nav-inner">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
            >
              <span className="nav-icon">{item.icon}</span>
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};

export default NavigationMenu;
