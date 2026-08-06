import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import PricingPage from './pages/PricingPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(true);

  React.useEffect(() => {
    const updateMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };
    updateMode();
    const observer = new MutationObserver(updateMode);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-background text-on-background min-h-screen relative overflow-x-hidden flex flex-col font-body-md text-body-md">
      {/* Noise Overlay */}
      <div className="fixed inset-0 z-10 noise-bg mix-blend-overlay pointer-events-none"></div>

      {/* Navigation */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      {/* Main View Area */}
      <div className="flex-grow">
        {activeTab === 'home' && <HomePage setActiveTab={setActiveTab} isDarkMode={isDarkMode} />}
        {activeTab === 'portfolio' && <PortfolioPage setActiveTab={setActiveTab} isDarkMode={isDarkMode} />}
        {activeTab === 'pricing' && <PricingPage setActiveTab={setActiveTab} isDarkMode={isDarkMode} />}
        {activeTab === 'contact' && <ContactPage setActiveTab={setActiveTab} isDarkMode={isDarkMode} />}
      </div>

      {/* Shared Footer */}
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}

export default App;
