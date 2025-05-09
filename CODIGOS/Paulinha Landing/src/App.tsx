import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import Telegram from './components/Telegram';
import Footer from './components/Footer';
import Terms from './components/Terms';
import Privacy from './components/Privacy';

function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white font-[Montserrat]">
      <Header />
      <HeroSection />
      <AboutSection />
      <Telegram />
      <Footer />
    </div>
  );
}

function App() {
  useEffect(() => {
    // Update document title
    document.title = 'Paulinha Az. — Desejo Exclusivo';
    
    // Set favicon
    const link = document.querySelector("link[rel='icon']") as HTMLLinkElement;
    if (link) {
      link.href = 'https://res.cloudinary.com/dt9m3pkjv/image/upload/v1745119915/ico_fd03yx.png';
    }
    
    // Add Montserrat font
    const fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap';
    document.head.appendChild(fontLink);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/termos" element={<Terms />} />
        <Route path="/privacidade" element={<Privacy />} />
      </Routes>
    </Router>
  );
}

export default App;