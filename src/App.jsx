import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

// Components
import Header from './Components/Header';
import Footer from './Components/Footer';
import NavigationMenu from './Components/NavigationMenu';
import ChatBot from './Components/ChatBot';

// Pages - Direct Imports for top-level pages that might still be files
import Home from './pages/Home';

// Pages - Nested imports for pages that are now directories with sub-components
// About Us Sub-pages
import Vision from './pages/AboutUS/Vision';
import Mission from './pages/AboutUS/Mission';
import OurLeadership from './pages/AboutUS/OurLeadership';
import History from './pages/AboutUS/History';
import ConfessionOfFaith from './pages/AboutUS/ConfessionOfFaith';
import Provinces from './pages/AboutUS/Provinces';

// Gallery Sub-pages
import ServicePictures from './pages/Gallery/ServicePictures';
import GalleryVideos from './pages/Gallery/Videos';

// Departments Sub-pages
import LadiesDepartment from './pages/Departments/LadiesDepartment';
import YouthDepartment from './pages/Departments/YouthDepartment';
import ChildrensMinistry from './pages/Departments/ChildrensMinistry';
import WelfareDepartment from './pages/Departments/WelfareDepartment';
import EducationDepartment from './pages/Departments/EducationDepartment';
import EvangelismDepartment from './pages/Departments/EvangelismDepartment';

// Payments Sub-pages
import Donations from './pages/Payments/Donations';
import Tithe from './pages/Payments/Tithe';
import BankingDetails from './pages/Payments/BankingDetails';
import Offering from './pages/Payments/Offering';

// Projects Sub-pages
import DevelopmentalProjects from './pages/Projects/DevelopmentalProjects';
import FuturePlans from './pages/Projects/FuturePlans';
import YearPlanner from './pages/Projects/YearPlanner';

// Get Connected Sub-pages
import PrayerRequests from './pages/GetConnected/PrayerRequests';
import ChatWithPresident from './pages/GetConnected/ChatWithPresident';
import ChatWithSecretary from './pages/GetConnected/ChatWithSecretary';
import GeneralConnection from './pages/GetConnected/General';

// Contact Us Sub-pages
import ContactInformation from './pages/ContactUs/ContactInformation';


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'dark bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      <Router>
        {/* The Header is currently hidden on desktop via CSS, so it's only for mobile. */}
        <Header
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />

        {/* NavigationMenu for both desktop (in-flow) and mobile (fixed) */}
        <NavigationMenu
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          darkMode={darkMode}
        />

        {/*
          IMPORTANT: The 'main-content-padding' class is crucial.
          It adds top padding to ensure your page content starts below the navigation bar.
          Adjust 'pt-16' (which means padding-top: 4rem or 64px) based on the exact
          height of your desktop navigation bar when it's closed.
          You might need to inspect it in your browser's dev tools to get an accurate height.
          If your nav bar is taller, increase this value (e.g., pt-20, pt-24).
        */}
        <main className="flex-grow pt-16 md:pt-24"> {/* Added padding for desktop and mobile */}
          <Routes>
            <Route path="/" element={<Home />} />

            {/* About Us Routes */}
            <Route path="/about-us/vision" element={<Vision />} />
            <Route path="/about-us/mission" element={<Mission />} />
            <Route path="/about-us/our-leadership" element={<OurLeadership />} />
            <Route path="/about-us/history" element={<History />} />
            <Route path="/about-us/confession-of-faith" element={<ConfessionOfFaith />} />
            <Route path="/about-us/provinces" element={<Provinces />} />

            {/* Gallery Routes */}
            <Route path="/gallery/service-pictures" element={<ServicePictures />} />
            <Route path="/gallery/videos" element={<GalleryVideos />} />

            {/* Departments Routes */}
            <Route path="/departments/ladies" element={<LadiesDepartment />} />
            <Route path="/departments/youth" element={<YouthDepartment />} />
            <Route path="/departments/children" element={<ChildrensMinistry />} />
            <Route path="/departments/welfare" element={<WelfareDepartment />} />
            <Route path="/departments/education" element={<EducationDepartment />} />
            <Route path="/departments/evangelism" element={<EvangelismDepartment />} />

            {/* Payments Routes */}
            <Route path="/payments/donations" element={<Donations />} />
            <Route path="/payments/tithe" element={<Tithe />} />
            <Route path="/payments/banking-details" element={<BankingDetails />} />
            <Route path="/payments/offering" element={<Offering />} />

            {/* Projects Routes */}
            <Route path="/projects/developmental" element={<DevelopmentalProjects />} />
            <Route path="/projects/future-plans" element={<FuturePlans />} />
            <Route path="/projects/year-planner" element={<YearPlanner />} />

            {/* Get Connected Routes */}
            <Route path="/get-connected/prayer-requests" element={<PrayerRequests />} />
            <Route path="/get-connected/chat-with-president" element={<ChatWithPresident />} />
            <Route path="/get-connected/chat-with-secretary" element={<ChatWithSecretary />} />
            <Route path="/get-connected/general" element={<GeneralConnection />} />

            {/* Contact Us Routes */}
            <Route path="/contact-us/information" element={<ContactInformation />} />

            {/* Potentially add a catch-all for 404 if needed */}
            {/* <Route path="*" element={<NotFoundPage />} /> */}
          </Routes>
        </main>

        <Footer darkMode={darkMode} />
        <ChatBot darkMode={darkMode} />
      </Router>
    </div>
  );
}

export default App;