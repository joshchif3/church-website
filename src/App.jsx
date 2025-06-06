import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import NavigationMenu from './Components/NavigationMenu';
import ChatBot from './Components/ChatBot';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Gallery from './pages/Gallery';
import Departments from './pages/Departments';
import Projects from './pages/Projects';
import GetConnected from './pages/GetConnected';
import ContactUs from './pages/ContactUs';

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
            <Route path="/about-us" element={<AboutUs />} />
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