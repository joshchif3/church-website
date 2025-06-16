import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import {
  FiX, FiMenu, FiHome, FiInfo, FiImage, FiLayers,
  FiCalendar, FiUsers, FiMail, FiChevronDown, FiDollarSign
} from 'react-icons/fi';
import '../styles/navigationMenu.css';

const NavigationMenu = ({ menuOpen, setMenuOpen }) => {
  const location = useLocation();
  const [aboutOpen, setAboutOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [departmentsOpen, setDepartmentsOpen] = useState(false);
  const [paymentsOpen, setPaymentsOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [connectedOpen, setConnectedOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileGalleryOpen, setMobileGalleryOpen] = useState(false);
  const [mobileDepartmentsOpen, setMobileDepartmentsOpen] = useState(false);
  const [mobilePaymentsOpen, setMobilePaymentsOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);
  const [mobileConnectedOpen, setMobileConnectedOpen] = useState(false);
  const [mobileContactOpen, setMobileContactOpen] = useState(false);

  const toggleDropdown = (itemName) => {
    // Close all other dropdowns first
    if (itemName !== 'About Us') setAboutOpen(false);
    if (itemName !== 'Gallery') setGalleryOpen(false);
    if (itemName !== 'Departments') setDepartmentsOpen(false);
    if (itemName !== 'Payments') setPaymentsOpen(false);
    if (itemName !== 'Projects') setProjectsOpen(false);
    if (itemName !== 'Get Connected') setConnectedOpen(false);
    if (itemName !== 'Contact Us') setContactOpen(false);

    // Toggle the clicked dropdown
    if (itemName === 'About Us') setAboutOpen(!aboutOpen);
    if (itemName === 'Gallery') setGalleryOpen(!galleryOpen);
    if (itemName === 'Departments') setDepartmentsOpen(!departmentsOpen);
    if (itemName === 'Payments') setPaymentsOpen(!paymentsOpen);
    if (itemName === 'Projects') setProjectsOpen(!projectsOpen);
    if (itemName === 'Get Connected') setConnectedOpen(!connectedOpen);
    if (itemName === 'Contact Us') setContactOpen(!contactOpen);
  };

  const navItems = [
    { name: 'Home', path: '/', icon: <FiHome />, isLink: true },
    {
      name: 'About Us',
      path: '/about-us',
      icon: <FiInfo />,
      subLinks: [
        { name: 'Vision', path: '/about-us/vision' },
        { name: 'Mission', path: '/about-us/mission' },
        { name: 'Our Leadership', path: '/about-us/our-leadership' },
        { name: 'History', path: '/about-us/history' },
        { name: 'Confession of Faith', path: '/about-us/confession-of-faith' },
        { name: 'Provinces', path: '/about-us/provinces' }
      ],
      isLink: false
    },
    {
      name: 'Gallery',
      path: '/gallery',
      icon: <FiImage />,
      subLinks: [
        { name: 'Service Pictures', path: '#' },
        { name: 'Videos', path: '#' }
      ],
      isLink: false
    },
    {
      name: 'Departments',
      path: '/departments',
      icon: <FiLayers />,
      subLinks: [
        { name: 'Ladies Department', path: '#' },
        { name: 'Youth Department', path: '#' },
        { name: "Children's Ministry", path: '#' },
        { name: 'Welfare Department', path: '#' },
        { name: 'Education Department', path: '#' },
        { name: 'Evangelism Department', path: '#' }
      ],
      isLink: false
    },
    {
      name: 'Payments',
      path: '/payments',
      icon: <FiDollarSign />,
      subLinks: [
        { name: 'Donations', path: '#' },
        { name: 'Tithe', path: '#' },
        { name: 'Banking Details', path: '#' },
        { name: 'Offering', path: '#' }
      ],
      isLink: false
    },
    {
      name: 'Projects',
      path: '/projects',
      icon: <FiCalendar />,
      subLinks: [
        { name: 'Developmental Projects', path: '#' },
        { name: 'Future Plans', path: '#' },
        { name: 'Year Planner', path: '#' }
      ],
      isLink: false
    },
    {
      name: 'Get Connected',
      path: '/get-connected',
      icon: <FiUsers />,
      subLinks: [
        { name: 'Prayer Requests', path: '#' },
        { name: 'Chat With President', path: '#' },
        { name: 'Chat With Secretary', path: '#' },
        { name: 'General', path: '#' }
      ],
      isLink: false
    },
    {
      name: 'Contact Us',
      path: '/contact-us',
      icon: <FiMail />,
      subLinks: [
        { name: 'Contact Information', path: '#' }
      ],
      isLink: false
    }
  ];

  return (
    <>
      {/* Mobile Menu Toggle */}
      <div className="menu-toggle md:hidden">
        <button onClick={() => setMenuOpen(true)}>
          <FiMenu className="icon" />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25 }}
            className="mobile-menu"
          >
            <div className="menu-header flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Menu</h2>
              <button onClick={() => setMenuOpen(false)} className="close-btn">
                <FiX className="icon" />
              </button>
            </div>

            <nav className="mobile-nav">
              {navItems.map((item) => (
                <div key={item.name}>
                  <div
                    onClick={() => {
                      if (item.name === 'About Us' && item.subLinks) {
                        setMobileAboutOpen(!mobileAboutOpen);
                        setMobileGalleryOpen(false);
                        setMobileDepartmentsOpen(false);
                        setMobilePaymentsOpen(false);
                        setMobileProjectsOpen(false);
                        setMobileConnectedOpen(false);
                        setMobileContactOpen(false);
                      } else if (item.name === 'Gallery' && item.subLinks) {
                        setMobileGalleryOpen(!mobileGalleryOpen);
                        setMobileAboutOpen(false);
                        setMobileDepartmentsOpen(false);
                        setMobilePaymentsOpen(false);
                        setMobileProjectsOpen(false);
                        setMobileConnectedOpen(false);
                        setMobileContactOpen(false);
                      } else if (item.name === 'Departments' && item.subLinks) {
                        setMobileDepartmentsOpen(!mobileDepartmentsOpen);
                        setMobileAboutOpen(false);
                        setMobileGalleryOpen(false);
                        setMobilePaymentsOpen(false);
                        setMobileProjectsOpen(false);
                        setMobileConnectedOpen(false);
                        setMobileContactOpen(false);
                      } else if (item.name === 'Payments' && item.subLinks) {
                        setMobilePaymentsOpen(!mobilePaymentsOpen);
                        setMobileAboutOpen(false);
                        setMobileGalleryOpen(false);
                        setMobileDepartmentsOpen(false);
                        setMobileProjectsOpen(false);
                        setMobileConnectedOpen(false);
                        setMobileContactOpen(false);
                      } else if (item.name === 'Projects' && item.subLinks) {
                        setMobileProjectsOpen(!mobileProjectsOpen);
                        setMobileAboutOpen(false);
                        setMobileGalleryOpen(false);
                        setMobileDepartmentsOpen(false);
                        setMobilePaymentsOpen(false);
                        setMobileConnectedOpen(false);
                        setMobileContactOpen(false);
                      } else if (item.name === 'Get Connected' && item.subLinks) {
                        setMobileConnectedOpen(!mobileConnectedOpen);
                        setMobileAboutOpen(false);
                        setMobileGalleryOpen(false);
                        setMobileDepartmentsOpen(false);
                        setMobilePaymentsOpen(false);
                        setMobileProjectsOpen(false);
                        setMobileContactOpen(false);
                      } else if (item.name === 'Contact Us' && item.subLinks) {
                        setMobileContactOpen(!mobileContactOpen);
                        setMobileAboutOpen(false);
                        setMobileGalleryOpen(false);
                        setMobileDepartmentsOpen(false);
                        setMobilePaymentsOpen(false);
                        setMobileProjectsOpen(false);
                        setMobileConnectedOpen(false);
                      } else {
                        setMenuOpen(false);
                      }
                    }}
                    className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  >
                    <span className="nav-icon">{item.icon}</span>
                    <span>{item.name}</span>
                    {item.subLinks && (
                      <FiChevronDown
                        className={`ml-auto transition-transform duration-300 ${
                          (item.name === 'About Us' && mobileAboutOpen) || 
                          (item.name === 'Gallery' && mobileGalleryOpen) ||
                          (item.name === 'Departments' && mobileDepartmentsOpen) ||
                          (item.name === 'Payments' && mobilePaymentsOpen) ||
                          (item.name === 'Projects' && mobileProjectsOpen) ||
                          (item.name === 'Get Connected' && mobileConnectedOpen) ||
                          (item.name === 'Contact Us' && mobileContactOpen) ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </div>
                  {item.subLinks && 
                    ((item.name === 'About Us' && mobileAboutOpen) || 
                     (item.name === 'Gallery' && mobileGalleryOpen) ||
                     (item.name === 'Departments' && mobileDepartmentsOpen) ||
                     (item.name === 'Payments' && mobilePaymentsOpen) ||
                     (item.name === 'Projects' && mobileProjectsOpen) ||
                     (item.name === 'Get Connected' && mobileConnectedOpen) ||
                     (item.name === 'Contact Us' && mobileContactOpen)) && (
                    <motion.div 
                      className="dropdown-menu"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.subLinks.map((subLink) => (
                        <Link
                          key={subLink.name}
                          to={subLink.path}
                          onClick={() => setMenuOpen(false)}
                          className="dropdown-item"
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Navigation */}
      <nav className="nav-container">
        <div className="nav-inner">
          {navItems.map((item) => (
            <div key={item.name} className="group relative">
              {item.isLink ? (
                <Link
                  to={item.path}
                  className={`nav-link ${location.pathname.startsWith(item.path) ? 'active' : ''}`}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              ) : (
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className={`nav-link ${location.pathname.startsWith(item.path) ? 'active' : ''}`}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span>{item.name}</span>
                  {item.subLinks && (
                    <FiChevronDown className={`ml-1 transition-transform duration-300 ${
                      (item.name === 'About Us' && aboutOpen) || 
                      (item.name === 'Gallery' && galleryOpen) ||
                      (item.name === 'Departments' && departmentsOpen) ||
                      (item.name === 'Payments' && paymentsOpen) ||
                      (item.name === 'Projects' && projectsOpen) ||
                      (item.name === 'Get Connected' && connectedOpen) ||
                      (item.name === 'Contact Us' && contactOpen) ? 'rotate-180' : ''
                    }`} />
                  )}
                </button>
              )}
              {item.subLinks && 
                ((item.name === 'About Us' && aboutOpen) || 
                 (item.name === 'Gallery' && galleryOpen) ||
                 (item.name === 'Departments' && departmentsOpen) ||
                 (item.name === 'Payments' && paymentsOpen) ||
                 (item.name === 'Projects' && projectsOpen) ||
                 (item.name === 'Get Connected' && connectedOpen) ||
                 (item.name === 'Contact Us' && contactOpen)) && (
                <motion.div
                  className="absolute top-full left-0 mt-1 w-56 dropdown-menu"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {item.subLinks.map((subLink) => (
                    <Link
                      key={subLink.name}
                      to={subLink.path}
                      className="dropdown-item"
                    >
                      {subLink.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </nav>
    </>
  );
};

export default NavigationMenu;