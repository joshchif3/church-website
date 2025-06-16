import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import NavigationMenu from './Components/NavigationMenu';
import ChatBot from './Components/ChatBot';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Departments from './pages/Departments';
import Projects from './pages/Projects';
import GetConnected from './pages/GetConnected';
import ContactUs from './pages/ContactUs';
import Vision from './pages/AboutUS/Vision';
import Mission from './pages/AboutUS/Mission';
import OurLeadership from './pages/AboutUS/OurLeadership';
import History from './pages/AboutUS/History';
import ConfessionOfFaith from './pages/AboutUS/ConfessionOfFaith';
import Provinces from './pages/AboutUS/Provinces';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'dark bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      <Router>
        <Header 
          darkMode={darkMode} 
          setDarkMode={setDarkMode} 
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
        
        <NavigationMenu 
          menuOpen={menuOpen} 
          setMenuOpen={setMenuOpen} 
          darkMode={darkMode}
        />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />

            {/* About Us direct routes */}
            <Route path="/about-us/vision" element={<Vision />} />
            <Route path="/about-us/mission" element={<Mission />} />
            <Route path="/about-us/our-leadership" element={<OurLeadership />} />
            <Route path="/about-us/history" element={<History />} />
            <Route path="/about-us/confession-of-faith" element={<ConfessionOfFaith />} />
            <Route path="/about-us/provinces" element={<Provinces />} />

            <Route path="/gallery" element={<Gallery />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/get-connected" element={<GetConnected />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </main>
        
        <Footer darkMode={darkMode} />
        <ChatBot darkMode={darkMode} />
      </Router>
    </div>
  );
}

export default App;
